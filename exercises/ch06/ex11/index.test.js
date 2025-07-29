import { polarPoint } from "./index";

test("極座標からxとyが計算できる", () => {
  polarPoint.r = 1;
  polarPoint.theta = Math.PI / 2; // 90度（上方向）
  expect(polarPoint.x).toBeCloseTo(0); // cos(90°) = 0
  expect(polarPoint.y).toBeCloseTo(1); // sin(90°) = 1
});

test("xとyを設定してrとthetaが更新される", () => {
  polarPoint.x = 3;
  polarPoint.y = 4;
  expect(polarPoint.r).toBeCloseTo(5); // √(3^2 + 4^2)
  expect(polarPoint.theta).toBeCloseTo(Math.atan2(4, 3));
});

test("xにNaNを設定するとエラー", () => {
  expect(() => {
    polarPoint.x = NaN;
  }).toThrow("xにNaNは設定できません");
});

test("yにNaNを設定するとエラー", () => {
  expect(() => {
    polarPoint.y = NaN;
  }).toThrow("yにNaNは設定できません");
});
