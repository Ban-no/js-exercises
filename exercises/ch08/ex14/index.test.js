// index.js で実装した any と catching を読み込む
import { any, catching } from "./index.js";

//
// ---------- any のテスト ----------
//

// any は「複数の関数を受け取り、どれか1つでも true を返したら true になる関数」を作る
// ここでは「0より大きい」または「0より小さい」なら true を返す関数 isNonZero を作成している

describe("any", () => {
  const isNonZero = any(
    (n) => n > 0,
    (n) => n < 0
  );

  test("returns false when all functions return false", () => {
    // n = 0 の場合、n > 0 も n < 0 も false なので、結果は false
    expect(isNonZero(0)).toBe(false);
  });

  test("returns true when the first function returns true", () => {
    // n = 42 の場合、n > 0 が true なので、結果は true
    expect(isNonZero(42)).toBe(true);
  });

  test("returns true when the second function returns true", () => {
    // n = -0.5 の場合、n < 0 が true なので、結果は true
    expect(isNonZero(-0.5)).toBe(true);
  });
});

//
// ---------- catching のテスト ----------
//

// catching は「エラーが出るかもしれない関数」と「エラーを処理する関数」を受け取り、
// エラーが出なければ普通に実行、エラーが出たら処理用の関数を呼んで結果を返す
// JSON.parse は正しい JSON ならオブジェクトに変換、間違った JSON ならエラーを投げる

describe("catching", () => {
  const safeJsonParse = catching(JSON.parse, (e) => {
    // エラーが出たときは { error: "エラー内容" } を返すようにする
    return { error: e.toString() };
  });

  test("returns parsed object when no error occurs", () => {
    // 正しい JSON を渡した場合 → 普通にパースされて { a: 1 } が返る
    expect(safeJsonParse('{"a": 1}')).toEqual({ a: 1 });
  });

  test("returns error object when error occurs", () => {
    // 間違った JSON を渡した場合 → エラーになるので { error: "SyntaxError: ..." } が返る
    const result = safeJsonParse("{Invalid Json}");
    expect(result.error).toMatch(/SyntaxError/);
  });
});
