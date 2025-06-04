console.log("最小値：" + Number.MIN_SAFE_INTEGER);
console.log("最大値：" + Number.MAX_SAFE_INTEGER);

const MaxValuePlus1 = Number.MAX_SAFE_INTEGER + 1;
const MaxValuePlus2 = Number.MAX_SAFE_INTEGER + 2;
console.log("最大値 + 1：" + MaxValuePlus1);
console.log("最大値 + 2：" + MaxValuePlus2);
console.log(
  "最大値 + 1 と 最大値 + 2 の比較：" + (MaxValuePlus1 === MaxValuePlus2)
);

console.log(
  "＝＝理由＝＝ \n" +
    "avaScriptではIEEE754標準で規定された64ビット浮動小数点数形式で数値を表す。その範囲外では階の精度が損なわれる。\n" +
    "そのためMAX_SAFE_INTEGERを超えると正確に表現できなくなり、同じ値として扱われる。(27ページ3.2参照) "
);
