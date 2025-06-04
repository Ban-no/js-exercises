// Number() 関数で数値に変換
console.log(Number(true)); // 1（true は 1 に変換される）
console.log(Number(1234));
console.log(Number("text")); // 数値に変換できない文字列は NaN（Not a Number）

// Boolean() 関数で真偽値に変換
console.log(Boolean(1234)); // 0 以外の数値は true
console.log(Boolean(0)); // 0 は false

// String() 関数で文字列に変換
console.log(String(true)); // "true"
console.log(String(1234)); // "1234"

// parseInt() で文字列から整数を抽出
console.log(parseInt("12,742 km：地球の直径")); // カンマで区切られているため、"12" までが抽出される

// parseFloat() で文字列から浮動小数点数を抽出
console.log(parseFloat("1.618：黄金比")); // "："以降は無視される
