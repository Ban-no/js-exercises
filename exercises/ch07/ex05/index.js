// 非破壊的 pop：最後の要素を取り除いた新しい配列を返す
export function pop(array) {
  return array.slice(0, -1); // 最後の要素を除いたコピー
}

// 非破壊的 push：新しい要素を末尾に追加した配列を返す
export function push(array, value) {
  return [...array, value]; // スプレッド構文で新配列
}

// 非破壊的 shift：最初の要素を取り除いた新しい配列
export function shift(array) {
  return array.slice(1); // 最初の要素以外をコピー
}

// 非破壊的 unshift：先頭に要素を追加した配列を返す
export function unshift(array, value) {
  return [value, ...array]; // スプレッドで前に追加
}

// 非破壊的 sort：新しいソート済み配列を返す
export function sort(array, compareFn) {
  return [...array].sort(compareFn); // コピーしてからsort
}

// 動作確認（Node.jsで実行）
const seq = [1, 2, 3, 4, 5];
console.log(pop(seq)); // [1, 2, 3, 4]
console.log(push(seq, 6)); // [1, 2, 3, 4, 5, 6]
console.log(shift(seq)); // [2, 3, 4, 5]
console.log(unshift(seq, 0)); // [0, 1, 2, 3, 4, 5]
console.log(sort(seq, (a, b) => b - a)); // [5, 4, 3, 2, 1]
console.log(seq); // [1, 2, 3, 4, 5] ← 変更なし！
