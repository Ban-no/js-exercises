import { equals } from "./index.js";

test("オブジェクトが可変である", () => {
  const obj1 = { x: 1 };
  obj1.y = 2;
  expect(obj1).toEqual({ x: 1, y: 2 });
});

test("オブジェクトは参照で比較される", () => {
  const obj1 = { x: 1, y: 2 };
  const obj2 = { x: 1, y: 2 };
  expect(obj1 === obj2).toBe(false);
});

test("equals 関数の基本動作", () => {
  expect(equals(42, 42)).toBe(true);
  expect(equals(null, null)).toBe(true);
  expect(equals({ x: 42 }, 42)).toBe(false);
  expect(equals(null, { x: 42 })).toBe(false);
});

test("equals: プロパティ名や数が違えば false", () => {
  expect(equals({ x: 1 }, { y: 1 })).toBe(false);
  expect(equals({ x: 1 }, { x: 1, y: 1 })).toBe(false);
});

test("equals: 再帰的な比較", () => {
  expect(equals({ x: { y: { z: 10 } } }, { x: { y: { z: 10 } } })).toBe(true);
  expect(equals({ x: { y: { z: 10 } } }, { x: { y: { z: 10, w: 1 } } })).toBe(
    false
  );
});
