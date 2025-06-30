// filterEvenValues関数が正しく偶数だけを取り出すかテストする

import { filterEvenValues } from "./index.js";

test("filterEvenValues keeps only even number values", () => {
  const input = { x: 1, y: 2, z: 3 };
  const expected = { y: 2 };

  // 戻り値のオブジェクトが正しいか
  expect(filterEvenValues(input)).toEqual(expected);

  // 元のオブジェクトが変更されていないか（純粋関数であることの確認）
  expect(input).toEqual({ x: 1, y: 2, z: 3 });
});

test("filterEvenValues returns empty object if no even values", () => {
  const input = { a: 1, b: 3, c: 5 };
  const expected = {};

  expect(filterEvenValues(input)).toEqual(expected);
});

test("filterEvenValues works with empty object", () => {
  expect(filterEvenValues({})).toEqual({});
});

test("filterEvenValues ignores non-number values", () => {
  const input = { a: 2, b: "4", c: true, d: 6 };
  const expected = { a: 2, d: 6 };

  expect(filterEvenValues(input)).toEqual(expected);
});
