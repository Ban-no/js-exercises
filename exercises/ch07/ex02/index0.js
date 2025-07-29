function fizzbuzz(n) {
  for (let i = 1; i <= n; i++) {
    if (i % 15 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
}

function sumOfSquaredDifference(f, g) {
  let result = 0;
  for (let i = 0; i < f.length; i++) {
    result += (f[i] - g[i]) ** 2;
  }
  return result;
}

function sumOfEvensIsLargerThan42(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 !== 0) {
      continue;
    }
    sum += array[i];
  }
  return sum >= 42;
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
