import { bitCount } from "./index.js";

describe("bitCount function", () => {
  test("bitCount counts bits correctly", () => {
    expect(bitCount(0b111)).toBe(3);
    expect(bitCount(0b1111111111111111111111111111111)).toBe(31);
    expect(bitCount(0)).toBe(0);
    expect(bitCount(0b101010)).toBe(3);
    expect(bitCount(0xffffffff)).toBe(32); // 32ビット全部1
    expect(bitCount(-1)).toBe(32); // 負の数も符号なし扱いで全部1とみなす
  });
});
