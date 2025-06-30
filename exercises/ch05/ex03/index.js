// 月名（"Jan", "Feb", ...）を受け取り、日数が31日かどうかを判定する関数（if-else版とswitch版）

// if-elseバージョン
export function is31DaysMonthIfElse(monthStr) {
  // 31日の月だけ true、それ以外は false を返す
  if (monthStr === "Jan") return true;
  else if (monthStr === "Mar") return true;
  else if (monthStr === "May") return true;
  else if (monthStr === "Jul") return true;
  else if (monthStr === "Aug") return true;
  else if (monthStr === "Oct") return true;
  else if (monthStr === "Dec") return true;
  else return false; // それ以外の月（Feb, Apr, Jun, Sep, Nov）は31日ではない
}

// switchバージョン
export function is31DaysMonthSwitch(monthStr) {
  // 31日の月だけ true、それ以外は false を返す
  switch (monthStr) {
    case "Jan":
    case "Mar":
    case "May":
    case "Jul":
    case "Aug":
    case "Oct":
    case "Dec":
      return true;
    default:
      return false;
  }
}
