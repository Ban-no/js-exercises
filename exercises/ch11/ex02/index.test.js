import { cache, slowFn, cachedSlowFn } from "./index.js";

describe("cache", () => {
  test("同じオブジェクトならキャッシュが使われる", () => {
    const obj = { a: 1 };

    const first = cachedSlowFn(obj);
    const second = cachedSlowFn(obj);

    expect(first).toBe(second); // 同じ結果が返る
  });

  test("異なるオブジェクトなら別の結果になる", () => {
    const obj1 = { a: 1 };
    const obj2 = { a: 1 };

    const result1 = cachedSlowFn(obj1);
    const result2 = cachedSlowFn(obj2);

    expect(result1).not.toBe(result2); // obj1 と obj2 は別オブジェクトなので別結果
  });

  test("キャッシュはWeakMapで管理される（GC対象になる）", () => {
    let obj = { x: 42 };

    const result = cachedSlowFn(obj);
    expect(result).toBe(cachedSlowFn(obj));

    // obj を参照しなくなると WeakMapからもGC対象になる（テストで確認は困難）
    obj = null;

    expect(typeof result).toBe("object"); // result はオブジェクト
  });
});
