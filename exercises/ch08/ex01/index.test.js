import { repeatChar, square, getNowObject } from "./index";

// 1. repeatChar のテスト
test("repeatChar returns correct array and logs characters", () => {
  const consoleSpy = jest.spyOn(console, "log").mockImplementation(() => {}); // console.log を監視
  const result = repeatChar(3, "A");
  expect(consoleSpy).toHaveBeenCalledTimes(3); // 3回表示されたか
  expect(consoleSpy).toHaveBeenCalledWith("A"); // 表示内容が 'A' か
  expect(result).toEqual(["A", "A", "A"]); // 戻り値が ['A', 'A', 'A']
  consoleSpy.mockRestore(); // console.log を元に戻す
});

// 2. square のテスト
test("square returns correct squared value", () => {
  expect(square(2)).toBe(4);
  expect(square(-3)).toBe(9);
  expect(square(0)).toBe(0);
});

// 3. getNowObject のテスト
test("getNowObject returns an object with a now property that is a Date", () => {
  const result = getNowObject();
  expect(result).toHaveProperty("now"); // now プロパティがあるか
  expect(result.now instanceof Date).toBe(true); // 値が Date オブジェクトか
});
