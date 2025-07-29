import { assign } from "./index.js";

// 基本的なマージができるかのテスト
test("assign basic object merging", () => {
  const target = { a: 1 };
  const source = { b: 2 };
  expect(assign(target, source)).toEqual({ a: 1, b: 2 });
});

// 既存のプロパティを上書きするかのテスト
test("assign overwrites existing properties", () => {
  const target = { a: 1 };
  const source = { a: 2 };
  expect(assign(target, source)).toEqual({ a: 2 });
});

// 複数のソースオブジェクトをマージできるかのテスト(複数ソースからコピー)
test("assign with multiple sources", () => {
  const target = { a: 1 };
  const source1 = { b: 2 };
  const source2 = { c: 3 };
  expect(assign(target, source1, source2)).toEqual({ a: 1, b: 2, c: 3 });
});

// null や undefined のソースを無視するかのテスト
test("assign ignores null and undefined", () => {
  const target = { a: 1 };
  const source1 = null;
  const source2 = { b: 2 };
  expect(assign(target, source1, source2)).toEqual({ a: 1, b: 2 });
});

// hasOwnProperty を使ってプロトタイプ(継承元)のプロパティを無視するかのテスト
test("assign only copies own enumerable properties", () => {
  const parent = { inherited: "not copied" };
  const child = Object.create(parent);
  child.own = "copied";
  expect(assign({}, child)).toEqual({ own: "copied" });
});
