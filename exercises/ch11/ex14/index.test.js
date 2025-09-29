import { sortJapanese, toJapaneseDateString } from "./index";

// sortJapanese のテスト
describe("sortJapanese", () => {
  test("濁点・小書き文字を無視してソートできる", () => {
    const input = ["ばなな", "はな", "ぱん", "ハナ", "つき", "ッキ"];
    // 正規化した文字列でソートするとこうなる
    const expected = ["つき", "ッキ", "はな", "ハナ", "ばなな", "ぱん"];
    expect(sortJapanese(input)).toEqual(expected);
  });
});

// toJapaneseDateString のテスト
describe("toJapaneseDateString", () => {
  test("令和の和暦変換", () => {
    const date = new Date("2025-09-01");
    expect(toJapaneseDateString(date)).toBe("令和7年9月1日");
  });

  test("平成の和暦変換", () => {
    const date = new Date("1993-05-05");
    expect(toJapaneseDateString(date)).toBe("平成5年5月5日");
  });

  test("昭和の和暦変換", () => {
    const date = new Date("1970-01-01");
    expect(toJapaneseDateString(date)).toBe("昭和45年1月1日");
  });

  test("明治以前の扱い", () => {
    const date = new Date("1900-01-01");
    expect(toJapaneseDateString(date)).toBe("明治以前1900年1月1日");
  });
});
