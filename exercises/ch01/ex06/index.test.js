import { fib } from "./index.js";

describe("math", () => {
  describe("fib", () => {
    it("returns 0 for fib(0)", () => {
      expect(fib(0)).toBe(0);
    });

    it("returns 1 for fib(1)", () => {
      expect(fib(1)).toBe(1);
    });

    it("returns 1 for fib(2)", () => {
      expect(fib(2)).toBe(1);
    });

    it("returns correct value for fib(5)", () => {
      expect(fib(5)).toBe(5);
    });

    it("returns correct value for fib(75)", () => {
      expect(fib(75)).toBe(2111485077978050);
    });
  });
});
