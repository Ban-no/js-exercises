import { DynamicSizeArray } from "./index.js";

// DynamicSizeArray クラスの動作確認を行う

describe("DynamicSizeArray", () => {
  test("should start with length 0", () => {
    // 初期状態では長さは0であるべき
    const arr = new DynamicSizeArray();
    expect(arr.length()).toBe(0);
  });

  test("should push and get values correctly", () => {
    // 値を追加して正しく取得できるかを確認
    const arr = new DynamicSizeArray();
    arr.push(42);
    arr.push(100);
    expect(arr.length()).toBe(2);
    expect(arr.get(0)).toBe(42);
    expect(arr.get(1)).toBe(100);
  });

  test("should throw on out-of-bound get/set", () => {
    // 範囲外アクセス時にエラーが出るかを確認
    const arr = new DynamicSizeArray();
    arr.push(1);
    expect(() => arr.get(2)).toThrow();
    expect(() => arr.set(2, 10)).toThrow();
  });

  test("should grow beyond initial capacity", () => {
    // 初期サイズ（4）を超えても動作するか確認
    const arr = new DynamicSizeArray();
    for (let i = 0; i < 10; i++) arr.push(i); // 10個 push
    expect(arr.length()).toBe(10);
    for (let i = 0; i < 10; i++) {
      expect(arr.get(i)).toBe(i); // 正しく保存されているか確認
    }
  });
});
