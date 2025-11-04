import { fibonacciSequence } from "./index.js";

test("fibonacciSequence() returns Fibonacci numbers", () => {
  const iter = fibonacciSequence();

  expect(iter.next().value).toBe(0);
  expect(iter.next().value).toBe(1);
  expect(iter.next().value).toBe(1);
  expect(iter.next().value).toBe(2);
  expect(iter.next().value).toBe(3);
  expect(iter.next().value).toBe(5);
});
