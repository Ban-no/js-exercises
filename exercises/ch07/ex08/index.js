// reverse関数は、文字列を「書記素単位」で反転させる関数
// 書記素とは、ユーザーが目で見て「1文字」に見える単位（例: 絵文字 👨‍👨‍👧‍👧 など）
export function reverse(str) {
  // Intl.Segmenter を使って、日本語の書記素（grapheme）で区切る
  const segmenter = new Intl.Segmenter("ja", { granularity: "grapheme" });

  // segmenter.segment(str) は書記素ごとの区切りを返す
  // それぞれの「書記素だけ」を配列として取り出す
  const segments = Array.from(segmenter.segment(str), (s) => s.segment);

  // 書記素の配列を reverse して、join("") で1つの文字列に戻す
  return segments.reverse().join("");
}

// デモ
//console.log("家族 👨‍👨‍👧‍👧");
//console.log(reverseGraphemes("家族 👨‍👨‍👧‍👧")); //  "👨‍👨‍👧‍👧 族家"
