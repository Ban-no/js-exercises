import { toBigEndian, toLittleEndian } from "./index.js";

describe("Endian conversion", () => {
  test("リトルエンディアン -> ビッグエンディアン", () => {
    const le = new Uint32Array([0x12345678, 0xabcdef01]);
    const be = toBigEndian(le);

    const expected = new Uint32Array([0x78563412, 0x01efcdab]);
    expect(be).toEqual(expected);
  });

  test("ビッグエンディアン -> リトルエンディアン", () => {
    const be = new Uint32Array([0x12345678, 0xabcdef01]);
    const le = toLittleEndian(be);

    const expected = new Uint32Array([0x78563412, 0x01efcdab]);
    expect(le).toEqual(expected);
  });
});
