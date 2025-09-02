import { sequenceToObject } from "./index";

// 基本のペア
test("単純な文字列キーと数値のペア", () => {
  expect(sequenceToObject("a", 1, "b", 2)).toEqual({ a: 1, b: 2 });
});

// 値が文字列や配列でもOK
test("値が様々な型", () => {
  expect(sequenceToObject("x", "hello", "y", [1, 2])).toEqual({
    x: "hello",
    y: [1, 2],
  });
});

// 奇数個の引数 → エラー
test("引数が奇数個のときはエラー", () => {
  expect(() => sequenceToObject("a", 1, "b")).toThrow("偶数");
});

// キーが string 以外 → エラー
test("キーが数値のときはエラー", () => {
  expect(() => sequenceToObject(1, "value")).toThrow("文字列");
});

// スプレッド演算子で配列を渡す
test("スプレッド演算子で配列を渡す", () => {
  const arr = ["foo", 10, "bar", 20];
  expect(sequenceToObject(...arr)).toEqual({ foo: 10, bar: 20 });
});
