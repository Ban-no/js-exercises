import { PositiveNumber } from "./index.js";

test("PositiveNumber: 初期値が正なら作成できる", () => {
  const p = PositiveNumber(10);
  expect(p.getX()).toBe(10);
});

test("PositiveNumber: 初期値が0以下ならエラー", () => {
  expect(() => PositiveNumber(0)).toThrow("require : x > 0");
  expect(() => PositiveNumber(-5)).toThrow("require : x > 0");
});

test("PositiveNumber: setXで正の値に更新できる", () => {
  const p = PositiveNumber(5);
  p.setX(20);
  expect(p.getX()).toBe(20);
});

test("PositiveNumber: setXで0以下を設定するとエラー", () => {
  const p = PositiveNumber(5);
  expect(() => p.setX(0)).toThrow("require : x > 0");
  expect(() => p.setX(-10)).toThrow("require : x > 0");
});

test("PositiveNumber: 外部から直接xにアクセスできない", () => {
  const p = PositiveNumber(5);
  expect(p.x).toBeUndefined(); // 外部からxにアクセスできない
});
