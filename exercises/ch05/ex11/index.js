function calculateTotal(price, taxRate) {
  const tax = price * taxRate;
  debugger; // ← ここでプログラムを一時停止して、変数などを確認できる
  const total = price + tax;
  return total;
}

const result = calculateTotal(100, 0.1);
console.log("合計金額:", result);
