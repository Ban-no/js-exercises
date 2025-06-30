// index.js から関数を読み込み
import { add, sub, mul, div } from "./index.js";

// テスト用の複素数を定義
const z1 = { real: 3, imag: 2 };
const z2 = { real: 1, imag: 4 };

// テストスイートの定義（"複素数演算" というグループ）
describe("複素数演算", () => {
  test("加算 add()", () => {
    const result = add(z1, z2);
    expect(result).toEqual({ real: 4, imag: 6 }); // 3+1=4, 2+4=6
  });

  test("減算 sub()", () => {
    const result = sub(z1, z2);
    expect(result).toEqual({ real: 2, imag: -2 }); // 3-1=2, 2-4=-2
  });

  test("乗算 mul()", () => {
    const result = mul(z1, z2);
    // 実部: 3*1 - 2*4 = 3 - 8 = -5
    // 虚部: 3*4 + 2*1 = 12 + 2 = 14
    expect(result).toEqual({ real: -5, imag: 14 });
  });

  test("除算 div()", () => {
    const result = div(z1, z2);
    // 小数が出るため toBeCloseTo を使用
    expect(result.real).toBeCloseTo(0.6470588, 5); // 約0.64706
    expect(result.imag).toBeCloseTo(-0.5882353, 5); // 約-0.58824
  });
});
