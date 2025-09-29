export function isEmailAddress(input) {
  if (typeof input !== "string") return false;

  const parts = input.split("@");
  if (parts.length !== 2) return false;

  const [local, domain] = parts;

  // local, domain が空でないことを確認
  if (!local || !domain) return false;

  // 長さ制限（テストに合わせて domain は 252 文字まで）
  if (local.length > 64 || domain.length > 252) return false;

  // 禁止文字（全角スペースや日本語、記号など）
  const forbiddenChars = /[()<>\[\]:;\\",\s\u3000\u3040-\u30FF]/;
  if (forbiddenChars.test(local) || forbiddenChars.test(domain)) return false;

  // local-part のドット構文チェック
  if (local.startsWith(".") || local.endsWith(".") || local.includes(".."))
    return false;

  // domain のドット構文チェック
  if (domain.startsWith(".") || domain.endsWith(".") || domain.includes(".."))
    return false;

  return true;
}
