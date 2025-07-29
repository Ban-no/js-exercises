// 要素の合計を求める
function sum(array) {
  return array.reduce((acc, cur) => acc + cur, 0);
}

// 文字列の結合をする（区切りなし）
function join(array) {
  return array.reduce((acc, cur) => acc + String(cur), "");
}

// 配列を逆順にする（新しい配列を作る）
function reverse(array) {
  return array.reduce((acc, cur) => [cur, ...acc], []);
}

// すべての要素が条件を満たすか（callbackは真偽値を返す関数）
function every(array, callback) {
  return array.reduce((acc, cur) => acc && Boolean(callback(cur)), true);
}

// いずれかの要素が条件を満たすか
function some(array, callback) {
  return array.reduce((acc, cur) => acc || Boolean(callback(cur)), false);
}

// =========================
// 動作確認（Nodeで実行）
// =========================
console.log("=== sum ===");
console.log(sum([1, 2, 3, 4])); // 10

console.log("\n=== join ===");
console.log(join(["a", "b", "c"])); // "abc"
console.log(join([1, 2, 3])); // "123"

console.log("\n=== reverse ===");
console.log(reverse([1, 2, 3])); // [3, 2, 1]

console.log("\n=== every ===");
console.log(every([2, 4, 6], (x) => x % 2 === 0)); // true
console.log(every([2, 3, 6], (x) => x % 2 === 0)); // false

console.log("\n=== some ===");
console.log(some([1, 3, 5], (x) => x % 2 === 0)); // false
console.log(some([1, 4, 5], (x) => x % 2 === 0)); // true
