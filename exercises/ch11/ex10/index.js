// その月の日数を返す関数
export function getDaysInMonth(year, month) {
  // new Date(year, month, 0) でその月の最終日が得られる
  // 月は 1-12 で指定（Dateオブジェクトでは0が1月、11が12月なので0に注意）
  return new Date(year, month, 0).getDate();
  // getDate() は日付を返す（1-31）
}

// 期間内の平日（日〜土のうち月〜金）の日数を返す関数
export function countWeekdaysBetween(startDate, endDate) {
  const start = new Date(startDate); // 'YYYY-MM-DD' 文字列を Date に変換
  const end = new Date(endDate);

  if (isNaN(start) || isNaN(end) || start > end) return 0;
  // isNaN(date) は無効な日付チェック
  // start > end は日付の順序チェック

  let count = 0;
  let current = new Date(start);

  while (current <= end) {
    // start から end までループ
    const day = current.getDay(); // getDay() は曜日を返す: 0(日)〜6(土)
    if (day !== 0 && day !== 6) count++; // 土日を除く
    current.setDate(current.getDate() + 1); // 1日進める
  }
  return count;
}

// 日付の曜日をロケールの形式で返す関数
export function getWeekdayName(dateStr, locale = "ja-JP") {
  const date = new Date(dateStr);
  if (isNaN(date)) return null;
  // toLocaleDateString は日付をローカル表記に変換
  // { weekday: "long" } で曜日の文字列を返す
  return date.toLocaleDateString(locale, { weekday: "long" });
}

// 先月1日の Date オブジェクトを返す関数
// getMonth / setMonth は使わない
export function getFirstDayOfLastMonth() {
  const now = new Date();
  const firstDayThisMonth = new Date(now.getFullYear(), now.getMonth(), 1);
  // 今月1日から1ミリ秒戻すと先月末になる
  const lastDayPrevMonth = new Date(firstDayThisMonth.getTime() - 1);
  // 先月1日の0:0:0を返す
  return new Date(
    lastDayPrevMonth.getFullYear(),
    lastDayPrevMonth.getMonth(),
    1,
    0,
    0,
    0,
    0
  );
}
