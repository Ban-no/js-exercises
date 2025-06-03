export function fn(x, y) {
  const epsilon = 1e-10;
  return Math.abs(x - y) < epsilon;
}
