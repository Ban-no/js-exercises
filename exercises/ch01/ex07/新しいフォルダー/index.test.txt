import { Point } from "./index.js";

describe("Point Class", () => {
  //distanceのテスト
  test("distance()", () => {
    const p1 = new Point(3, 4);
    expect(p1.distance()).toBe(5); // √(3^2 + 4^2) = 5
  });

  //addのテスト
  test("add()", () => {
    const p1 = new Point(1, 2);
    const p2 = new Point(3, 4);

    expect(p1.x).toBe(1);
    expect(p1.y).toBe(2);

    // p1 と p2 を加算
    p1.add(p2);

    expect(p1.x).toBe(4); // 1 + 3 = 4
    expect(p1.y).toBe(6); // 2 + 4 = 6
  });
});
