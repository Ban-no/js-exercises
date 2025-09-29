import { TypeMap } from "./index.js";

class Foo {}

describe("TypeMap", () => {
  test("プリミティブのラッパークラス", () => {
    const typeMap = new TypeMap();
    typeMap.set(String, "string");
    typeMap.set(Number, 123);

    expect(typeMap.get(String)).toBe("string");
    expect(typeMap.get(Number)).toBe(123);
  });

  test("クラスのインスタンス", () => {
    const typeMap = new TypeMap();
    const foo = new Foo();
    typeMap.set(Foo, foo);

    expect(typeMap.get(Foo)).toBe(foo);
  });

  test("型不一致ならエラー", () => {
    const typeMap = new TypeMap();
    expect(() => typeMap.set(Date, "not a date")).toThrow();
  });
});
