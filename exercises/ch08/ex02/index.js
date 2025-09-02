// 再帰でべき乗を計算する関数
export function powerRecursive(base, exp) {
  if (exp === 0) return 1;

  if (exp % 2 === 0) {
    const half = powerRecursive(base, exp / 2);
    return half * half;
  }

  return base * powerRecursive(base, exp - 1);
}

// ループでべき乗を計算する関数
export function powerLoop(base, exp) {
  let result = 1;
  let current = base;
  let n = exp;

  while (n > 0) {
    if (n % 2 === 1) {
      result *= current;
    }
    current *= current;
    n = Math.floor(n / 2);
  }

  return result;
}
