// 各ループでフィボナッチ数列の最初の10項が正しく作られるかテストする

import { fibonacciWhile, fibonacciDoWhile, fibonacciFor } from "./index.js";

// フィボナッチ数列の期待される結果
const expected = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55];

test("fibonacciWhile returns the first 10 Fibonacci numbers", () => {
  expect(fibonacciWhile()).toEqual(expected);
});

test("fibonacciDoWhile returns the first 10 Fibonacci numbers", () => {
  expect(fibonacciDoWhile()).toEqual(expected);
});

test("fibonacciFor returns the first 10 Fibonacci numbers", () => {
  expect(fibonacciFor()).toEqual(expected);
});
