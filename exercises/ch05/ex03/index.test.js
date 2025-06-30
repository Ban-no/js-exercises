// 月名を入力して正しく 31日かどうか判定されるかテストする

import { is31DaysMonthIfElse, is31DaysMonthSwitch } from "./index.js";

test("is31DaysMonthIfElse returns true for 31-day months", () => {
  expect(is31DaysMonthIfElse("Jan")).toBe(true);
  expect(is31DaysMonthIfElse("Mar")).toBe(true);
  expect(is31DaysMonthIfElse("May")).toBe(true);
  expect(is31DaysMonthIfElse("Jul")).toBe(true);
  expect(is31DaysMonthIfElse("Aug")).toBe(true);
  expect(is31DaysMonthIfElse("Oct")).toBe(true);
  expect(is31DaysMonthIfElse("Dec")).toBe(true);
});

test("is31DaysMonthIfElse returns false for non-31-day months", () => {
  expect(is31DaysMonthIfElse("Feb")).toBe(false);
  expect(is31DaysMonthIfElse("Apr")).toBe(false);
  expect(is31DaysMonthIfElse("Jun")).toBe(false);
  expect(is31DaysMonthIfElse("Sep")).toBe(false);
  expect(is31DaysMonthIfElse("Nov")).toBe(false);
});

test("is31DaysMonthSwitch returns correct results", () => {
  // 31日の月
  expect(is31DaysMonthSwitch("Jan")).toBe(true);
  expect(is31DaysMonthSwitch("Mar")).toBe(true);
  expect(is31DaysMonthSwitch("May")).toBe(true);
  expect(is31DaysMonthSwitch("Jul")).toBe(true);
  expect(is31DaysMonthSwitch("Aug")).toBe(true);
  expect(is31DaysMonthSwitch("Oct")).toBe(true);
  expect(is31DaysMonthSwitch("Dec")).toBe(true);

  // 31日でない月
  expect(is31DaysMonthSwitch("Feb")).toBe(false);
  expect(is31DaysMonthSwitch("Apr")).toBe(false);
  expect(is31DaysMonthSwitch("Jun")).toBe(false);
  expect(is31DaysMonthSwitch("Sep")).toBe(false);
  expect(is31DaysMonthSwitch("Nov")).toBe(false);
});
