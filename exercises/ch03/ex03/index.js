export function fn(x, y) {
  const epsilon = 1e-10; // 許容誤差
  return Math.abs(x - y) < epsilon; // xとyの差が許容誤差より小さいかどうかをチェック
}
