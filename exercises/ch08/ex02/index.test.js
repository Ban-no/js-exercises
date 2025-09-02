import { powerRecursive, powerLoop } from "./index.js";

test("2の累乗（再帰版）", () => {
  expect(powerRecursive(2, 0)).toBe(1);
  expect(powerRecursive(2, 1)).toBe(2);
  expect(powerRecursive(2, 5)).toBe(32);
  expect(powerRecursive(2, 10)).toBe(1024);
});

test("2の累乗（ループ版）", () => {
  expect(powerLoop(2, 0)).toBe(1);
  expect(powerLoop(2, 1)).toBe(2);
  expect(powerLoop(2, 5)).toBe(32);
  expect(powerLoop(2, 10)).toBe(1024);
});

test("異なる base の累乗（両方同じ結果になるか）", () => {
  expect(powerRecursive(3, 7)).toBe(powerLoop(3, 7));
  expect(powerRecursive(5, 3)).toBe(powerLoop(5, 3));
});
