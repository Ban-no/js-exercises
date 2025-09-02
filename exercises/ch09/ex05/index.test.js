// ESM の import を使う
import { instanceOf } from "./index.js";

describe("instanceOf function", () => {
  test("直接のインスタンス判定が正しい", () => {
    class Animal {}
    const a = new Animal();
    expect(instanceOf(a, Animal)).toBe(true);
  });

  test("多段継承の基底クラスも正しく判定できる", () => {
    class Animal {}
    class Mammal extends Animal {}
    class Dog extends Mammal {}

    const d = new Dog();
    expect(instanceOf(d, Dog)).toBe(true); // 自分自身
    expect(instanceOf(d, Mammal)).toBe(true); // 親クラス
    expect(instanceOf(d, Animal)).toBe(true); // さらに上のクラス
  });

  test("継承関係にない場合は false", () => {
    class Animal {}
    class Car {}
    const a = new Animal();
    expect(instanceOf(a, Car)).toBe(false);
  });

  test("null や undefined を渡したら false", () => {
    class Animal {}
    expect(instanceOf(null, Animal)).toBe(false);
    expect(instanceOf(undefined, Animal)).toBe(false);
  });

  test("constructor が関数でない場合はエラー", () => {
    const obj = {};
    expect(() => instanceOf(obj, 123)).toThrow(TypeError);
  });
});
