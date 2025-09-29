// modifyUrl 関数
// 引数: { base: string, addQuery?: [string, string][], path?: string }
// 戻り値: string (修正後のURL)
export function modifyUrl({ base, addQuery = [], path }) {
  let url;
  try {
    // base を URL オブジェクトに変換
    url = new URL(base);
  } catch (err) {
    throw new Error("Invalid URL format");
  }

  // パスを修正する（path が与えられた場合）
  if (path !== undefined) {
    // new URL(path, url) とすると相対パス解決されるので、
    // ここでは URL.pathname を直接修正する
    if (path.startsWith("./")) {
      url.pathname = path.slice(2); // "./buz" → "buz"
    } else if (path.startsWith("/")) {
      url.pathname = path;
    } else {
      url.pathname = path;
    }
  }

  // クエリを追加する（addQuery が与えられた場合）
  for (const [key, value] of addQuery) {
    url.searchParams.append(key, value);
  }

  // 完成したURLを文字列として返す
  return url.toString();
}
