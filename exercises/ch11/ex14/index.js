// 日本語文字列の配列を、濁点・小書き文字を無視してソートする関数
export function sortJapanese(arr) {
  return [...arr].sort((a, b) => {
    // 比較用に文字列を正規化する関数
    const normalize = (str) =>
      str
        .normalize("NFKC") // 全角・半角などを統一
        .replace(/[\u3099\u309A]/g, "") // 濁点・半濁点を除去
        // 小書き文字を大きい文字に置換
        .replace(/っ|ッ/g, "つ")
        .replace(/ゃ|ャ/g, "や")
        .replace(/ゅ|ュ/g, "ゆ")
        .replace(/ょ|ョ/g, "よ")
        .replace(/ぁ|ァ/g, "あ")
        .replace(/ぃ|ィ/g, "い")
        .replace(/ぅ|ゥ/g, "う")
        .replace(/ぇ|ェ/g, "え")
        .replace(/ぉ|ォ/g, "お");

    const na = normalize(a); // a を正規化
    const nb = normalize(b); // b を正規化

    // 正規化した文字列が同じなら、元の文字列で比較（安定ソートのため）
    if (na === nb) {
      return a.localeCompare(b, "ja");
    }

    // 正規化した文字列で比較
    return na.localeCompare(nb, "ja");
  });
}

// Date オブジェクトを「令和6年4月2日」形式に変換する関数
export function toJapaneseDateString(date) {
  const year = date.getFullYear(); // 西暦年を取得
  const month = date.getMonth() + 1; // 月を取得 (0始まりなので+1)
  const day = date.getDate(); // 日を取得

  let era = ""; // 元号名
  let eraYear = 0; // 元号内の年

  // 元号判定
  if (year >= 2019) {
    era = "令和";
    eraYear = year - 2018;
  } else if (year >= 1989) {
    era = "平成";
    eraYear = year - 1988;
  } else if (year >= 1926) {
    era = "昭和";
    eraYear = year - 1925;
  } else {
    era = "明治以前";
    eraYear = year; // 古い年はそのまま表示
  }

  // 文字列に組み立てて返す
  return `${era}${eraYear}年${month}月${day}日`;
}
