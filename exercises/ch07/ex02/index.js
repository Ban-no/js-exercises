// FizzBuzz（1〜nまでをループして、条件に応じて出力）
function fizzbuzz(n) {
  Array.from({ length: n }, (_, i) => i + 1) // [1, 2, ..., n]
    .map((i) =>
      i % 15 === 0
        ? "FizzBuzz"
        : i % 3 === 0
          ? "Fizz"
          : i % 5 === 0
            ? "Buzz"
            : i
    )
    .forEach((val) => console.log(val));
}

// 2つの配列の差の二乗の合計を求める
function sumOfSquaredDifference(f, g) {
  return f
    .map((val, i) => (val - g[i]) ** 2)
    .reduce((acc, cur) => acc + cur, 0);
}

// 偶数の合計が42以上か判定する
function sumOfEvensIsLargerThan42(array) {
  return array.filter((x) => x % 2 === 0).reduce((sum, x) => sum + x, 0) >= 42;
}

// ======================
// 実行例（確認用）
// ======================
console.log("=== FizzBuzz (1〜20) ===");
fizzbuzz(20);

console.log("\n=== sumOfSquaredDifference ===");
console.log(sumOfSquaredDifference([1, 2, 3], [4, 5, 6])); // → 27

console.log("\n=== sumOfEvensIsLargerThan42 ===");
console.log(sumOfEvensIsLargerThan42([10, 20, 12])); // → true
console.log(sumOfEvensIsLargerThan42([1, 2, 3])); // → false
