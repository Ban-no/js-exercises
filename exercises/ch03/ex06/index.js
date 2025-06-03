// substringとは：文字列の一部（部分文字列）を取り出す関数
// 例: "apple" の 1文字目から3文字目までを取り出すと "pp" になる

export function substring(str, indexStart, indexEnd) {
  // str が文字列でない場合（null や undefinedなど）、空文字を返して終了
  if (typeof str !== "string") return "";

  // indexStart を調整する
  // ・整数に変換（小数は切り捨て）
  // ・NaN の場合は 0 にする
  // ・0未満にならないようにする
  // ・文字列の長さを超えないようにする
  indexStart = Math.max(0, Math.min(str.length, Math.floor(indexStart) || 0));

  // indexEnd を調整する
  // ・未指定なら文字列の長さに設定
  // ・整数に変換、NaNなら0
  // ・0未満にならないようにする
  // ・文字列の長さを超えないようにする
  indexEnd =
    indexEnd === undefined
      ? str.length
      : Math.max(0, Math.min(str.length, Math.floor(indexEnd) || 0));

  // indexStart が indexEnd より大きい場合、入れ替える
  if (indexStart > indexEnd) {
    [indexStart, indexEnd] = [indexEnd, indexStart];
  }

  // 指定された範囲の部分文字列を返す
  return str.slice(indexStart, indexEnd);
}

// slice：指定範囲の文字列をそのまま返す（JavaScript標準のslice関数を利用）
export function slice(str, indexStart, indexEnd) {
  if (typeof str !== "string") return "";
  return str.slice(indexStart, indexEnd);
}

// padStart：指定された長さになるまで、文字列の先頭に指定文字を繰り返し追加する
// 例: padStart("7", 3, "0") → "007"
export function padStart(str, targetLength, padString) {
  if (typeof str !== "string") return "";

  // targetLength を整数に変換
  targetLength = Math.floor(targetLength);

  // すでに指定の長さ以上ならそのまま返す
  if (targetLength <= str.length) return str;

  // パディング文字列を作成（指定がなければスペース）
  let padding = "";
  while (padding.length < targetLength - str.length) {
    padding += padString || " ";
  }

  // 必要な長さだけ取り出して結合
  return padding.slice(0, targetLength - str.length) + str;
}

// trim：文字列の前後にある空白（スペース・タブ・改行）を削除する
export function trim(str) {
  if (typeof str !== "string") return "";

  // 正規表現で先頭と末尾の空白を削除
  return str.replace(/^\s+|\s+$/g, "");
}
