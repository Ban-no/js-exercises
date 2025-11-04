/*** P367のコードを写経 
function* fibonacciSequence() {
  let x = 0,
    y = 1;
  for (;;) {
    yield x;
    [x, y] = [y, x + y]; // 分割代入を行っている
  }
}
***/

// fibonacciSequence関数（ジェネレータを使わない版）
export function fibonacciSequence() {
  let x = 0;
  let y = 1;

  return {
    next() {
      const value = x;
      [x, y] = [y, x + y];
      return { value, done: false };
    },
    [Symbol.iterator]() {
      return this;
    },
  };
}
