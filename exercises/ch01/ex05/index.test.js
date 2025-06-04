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

  describe("sum", () => {
    it("returns the sum of positive numbers", () => {
      expect(sum([1, 2, 3, 4, 5])).toBe(15);
    });

    it("returns the sum of negative numbers", () => {
      expect(sum([-1, -2, -3, -4, -5])).toBe(-15);
    });

    it("returns the sum of mixed positive and negative numbers", () => {
      expect(sum([1, -2, 3, -4, 5])).toBe(3);
    });

    it("returns zero when an empty array is given", () => {
      expect(sum([])).toBe(0);
    });

    it("returns the same number when a single-element array is given", () => {
      expect(sum([42])).toBe(42);
    });
  });

  describe("factorial", () => {
    it("returns 1 for factorial of 0", () => {
      expect(factorial(0)).toBe(1);
    });

    it("returns the correct factorial for positive integers", () => {
      expect(factorial(1)).toBe(1);
      expect(factorial(2)).toBe(2);
      expect(factorial(3)).toBe(6);
      expect(factorial(4)).toBe(24);
      expect(factorial(5)).toBe(120);
    });

    it("returns the correct factorial for larger numbers", () => {
      expect(factorial(6)).toBe(720);
      expect(factorial(7)).toBe(5040);
    });
  });
});
