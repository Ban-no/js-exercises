// index.test.js

const { equals } = require("./index");

test("(42, 42) 厳密等価なら true", () => {
  expect(equals(42, 42)).toBe(true);
});

test("(null, null) 厳密等価なら true", () => {
  expect(equals(null, null)).toBe(true);
});

test("({ x: 42 }, 42) 厳密等価ではない場合オブジェクト以外が指定されれば false", () => {
  expect(equals({ x: 42 }, 42)).toBe(false);
});

test("(null, {x: 42}) 厳密等価ではない場合オブジェクト以外が指定されれば false", () => {
  expect(equals(null, { x: 42 })).toBe(false);
});

test("({ x: 1 }, { y: 1 }) プロパティの数・名前が一致しなければ false", () => {
  expect(equals({ x: 1 }, { y: 1 })).toBe(false);
});

test("({ x: 1 }, { x: 1, y: 2 }) プロパティの数・名前が一致しなければ false", () => {
  expect(equals({ x: 1 }, { x: 1, y: 2 })).toBe(false);
});

test("({x: {y: {z: 10}}}, {x: {y: {z: 10}}}) プロパティの各値を equals で再帰的に比較", () => {
  expect(equals({ x: { y: { z: 10 } } }, { x: { y: { z: 10 } } })).toBe(true);
});

test("({x: {y: {z: 10}}}, {x: {y: {z: 10, w: 1}}}) プロパティの各値を equals で再帰的に比較", () => {
  expect(equals({ x: { y: { z: 10 } } }, { x: { y: { z: 10, w: 1 } } })).toBe(
    false
  );
});
