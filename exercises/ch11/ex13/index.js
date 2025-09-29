// JSON.stringify と同じ結果を返す関数を作る
// 入力: 任意の値（数値・文字列・配列・オブジェクトなど）
// 出力: JSON 形式の文字列
export function stringifyJSON(value) {
  // 1. null の場合は文字列 "null" を返す
  if (value === null) return "null";

  // 2. 数値の場合
  if (typeof value === "number") {
    // JSON では NaN や Infinity は null として扱う
    if (!isFinite(value)) return "null";
    // -0 は JSON.stringify では "0" として扱われるので変換
    return value === 0 ? "0" : String(value); // String(value) で文字列に変換
  }

  // 3. 真偽値の場合
  if (typeof value === "boolean") return value ? "true" : "false";

  // 4. 文字列の場合
  if (typeof value === "string") {
    // 特殊文字をエスケープして返す
    return (
      '"' + // JSON 文字列はダブルクォートで囲む
      value.replace(/[\\"\u0000-\u001F]/g, (c) => {
        // 文字列中の特殊文字を置き換える
        switch (c) {
          case '"':
            return '\\"'; // ダブルクォートは \" にする
          case "\\":
            return "\\\\"; // バックスラッシュは \\ にする
          case "\b":
            return "\\b"; // バックスペース
          case "\f":
            return "\\f"; // フォームフィード
          case "\n":
            return "\\n"; // 改行
          case "\r":
            return "\\r"; // 復帰
          case "\t":
            return "\\t"; // タブ
          default:
            // 制御文字などは Unicode 形式で返す (\uXXXX)
            return "\\u" + c.charCodeAt(0).toString(16).padStart(4, "0");
        }
      }) +
      '"' // 文字列閉じる
    );
  }

  // 5. 配列の場合
  if (Array.isArray(value)) {
    const arr = value.map((v) =>
      // undefined や関数は JSON では null に変換
      v === undefined || typeof v === "function" ? "null" : stringifyJSON(v)
    );
    // 要素をカンマでつなげて [ ] で囲む
    return `[${arr.join(",")}]`;
  }

  // 6. オブジェクトの場合
  if (typeof value === "object") {
    const props = Object.keys(value)
      // undefined や関数のプロパティは JSON に含めない
      .filter(
        (key) => value[key] !== undefined && typeof value[key] !== "function"
      )
      // キーと値を再帰的に stringifyJSON して "key":"value" の形にする
      .map((key) => `${stringifyJSON(key)}:${stringifyJSON(value[key])}`);
    // カンマでつなげて { } で囲む
    return `{${props.join(",")}}`;
  }

  // 7. ここまでで扱えない型（関数や undefined が単独の場合）は undefined を返す
  return undefined;
}
