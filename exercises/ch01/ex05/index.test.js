// index.test.js
const { abs, sum, factorial } = require("./index");

test("abs returns the absolute value", () => {
  expect(abs(5)).toBe(5);
  expect(abs(-3)).toBe(3);
  expect(abs(0)).toBe(0);
});

test("sum returns the total of array elements", () => {
  expect(sum([1, 2, 3])).toBe(6);
  expect(sum([-1, -2, -3])).toBe(-6);
  expect(sum([])).toBe(0);
});

test("factorial returns the product of all positive integers up to n", () => {
  expect(factorial(0)).toBe(1);
  expect(factorial(1)).toBe(1);
  expect(factorial(3)).toBe(6);
  expect(factorial(5)).toBe(120);
});

/*
import { abs, sum, factorial } from "./index.js";

// TypeScript の場合は以下:
// import { abs, sum, factorial } from "./index.ts";

describe("math", () => {
  describe("abs", () => {
    it("returns same value when positive value given", () => {
      expect(abs(42)).toBe(42);
    });

    it("returns negated value when negative value given", () => {
      expect(abs(-42)).toBe(42);
    });

    it("returns zero value when zero given", () => {
      expect(abs(0)).toBe(0);
    });
  });

  // 以下に sum, factorial のテストを記載せよ
});
*/
