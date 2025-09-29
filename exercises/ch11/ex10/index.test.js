import {
  getDaysInMonth,
  countWeekdaysBetween,
  getWeekdayName,
  getFirstDayOfLastMonth,
} from "./index.js";

describe("Date utility functions", () => {
  test("getDaysInMonth", () => {
    expect(getDaysInMonth(2024, 2)).toBe(29); // うるう年
    expect(getDaysInMonth(2025, 2)).toBe(28);
    expect(getDaysInMonth(2025, 9)).toBe(30);
    expect(getDaysInMonth(2025, 8)).toBe(31);
  });

  test("countWeekdaysBetween", () => {
    expect(countWeekdaysBetween("2025-09-01", "2025-09-07")).toBe(5); // 1週間
    expect(countWeekdaysBetween("2025-09-06", "2025-09-07")).toBe(0); // 土日だけ
    expect(countWeekdaysBetween("2025-09-08", "2025-09-12")).toBe(5); // 平日だけ
  });

  test("getWeekdayName", () => {
    expect(getWeekdayName("2025-10-03", "ja-JP")).toBe("金曜日");
    expect(getWeekdayName("2025-10-03", "en-US")).toBe("Friday");
  });

  test("getFirstDayOfLastMonth", () => {
    const d = getFirstDayOfLastMonth();
    expect(d.getDate()).toBe(1);
    expect(d.getHours()).toBe(0);
    expect(d.getMinutes()).toBe(0);
    expect(d.getSeconds()).toBe(0);
  });
});
