import { resetibleCounter } from "./index.js";

describe("resetibleCounter ジェネレータ", () => {
  test("next() で 1,2,3 ... と増える", () => {
    const it = resetibleCounter();
    expect(it.next().value).toBe(1);
    expect(it.next().value).toBe(2);
    expect(it.next().value).toBe(3);
  });

  test("throw('reset') でカウンタがリセットされる（次は 1）", () => {
    const it = resetibleCounter();
    expect(it.next().value).toBe(1);
    expect(it.next().value).toBe(2);

    // カウンタをリセットするために 'reset' を投げる
    // generator.throw() はその位置の yield 式に例外を投げる
    it.throw("reset");

    // リセットされているので次は 1 になる
    expect(it.next().value).toBe(1);

    // さらに進めて別のリセットも試す
    expect(it.next().value).toBe(2);
    it.throw("reset");
    expect(it.next().value).toBe(1);
  });

  test("throw に Error を渡すと呼び出し側に例外が伝播する", () => {
    const it = resetibleCounter();
    expect(it.next().value).toBe(1);

    // Error を throw するとジェネレータ内で捕まえられなければ外に伝播する
    expect(() => it.throw(new Error("boom"))).toThrow("boom");

    // 例外でジェネレータが閉じられる場合がある（ここでは外側が catch するので次の呼び出しは別挙動）
  });
});
