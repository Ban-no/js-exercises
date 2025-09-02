import { TypedMap } from "./index.js";

describe("TypedMap (composition)", () => {
  test("set and get work with correct types", () => {
    const tm = new TypedMap("string", "number");
    tm.set("age", 30);
    expect(tm.get("age")).toBe(30);
  });

  test("throws error when key type is wrong", () => {
    const tm = new TypedMap("string", "number");
    expect(() => tm.set(123, 30)).toThrow(TypeError);
  });

  test("throws error when value type is wrong", () => {
    const tm = new TypedMap("string", "number");
    expect(() => tm.set("age", "thirty")).toThrow(TypeError);
  });

  test("can be initialized with valid entries", () => {
    const tm = new TypedMap("string", "number", [
      ["x", 1],
      ["y", 2],
    ]);
    expect(tm.get("x")).toBe(1);
    expect(tm.size).toBe(2);
  });

  test("throws error if initialized with invalid entries", () => {
    expect(() => {
      new TypedMap("string", "number", [["x", "not number"]]);
    }).toThrow(TypeError);
  });
});
