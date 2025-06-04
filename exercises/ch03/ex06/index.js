export function slice(str, indexStart, indexEnd) {
  // TODO: ここを実装しなさい

  const len = str.length;

  // indexStart を整数に変換し、NaN の場合は 0
  indexStart = Math.trunc(indexStart);
  if (isNaN(indexStart)) indexStart = 0;

  // indexEnd が undefined なら文字列末尾とする
  if (indexEnd === undefined) {
    indexEnd = len;
  } else {
    indexEnd = Math.trunc(indexEnd);
    if (isNaN(indexEnd)) indexEnd = 0;
  }

  // マイナスインデックスに対応
  if (indexStart < 0) indexStart = Math.max(len + indexStart, 0);
  else indexStart = Math.min(indexStart, len);

  if (indexEnd < 0) indexEnd = Math.max(len + indexEnd, 0);
  else indexEnd = Math.min(indexEnd, len);

  // 開始位置と終了位置を比較して逆順なら空文字
  if (indexEnd < indexStart) return "";

  let result = "";
  for (let i = indexStart; i < indexEnd; i++) {
    result += str[i];
  }

  return result;
  //return "TODO";
}
