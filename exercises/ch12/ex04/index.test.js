import { primes } from "./index.js";

test("primes generator returns first few prime numbers", () => {
  const gen = primes(); // 無限素数ジェネレータを作成
  const result = [];

  for (let i = 0; i < 10; i++) {
    result.push(gen.next().value);
  }

  expect(result).toEqual([2, 3, 5, 7, 11, 13, 17, 19, 23, 29]);
});
