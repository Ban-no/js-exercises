// フィボナッチ数列の最初の10項（1, 1, 2, 3, 5, ...）を返す関数を、3つのループで実装

// while 文を使うバージョン
export function fibonacciWhile() {
  const fib = [1, 1]; // 最初の2項を初期値として配列に入れておく
  let i = 2; // 3項目から始める（インデックス2）

  while (fib.length < 10) {
    // 前の2つの値を足して次の項を作る
    fib.push(fib[i - 1] + fib[i - 2]);
    i++;
  }

  return fib;
}

// do/while 文を使うバージョン
export function fibonacciDoWhile() {
  const fib = [1, 1]; // 初項と第2項をあらかじめ入れておく
  let i = 2;

  do {
    fib.push(fib[i - 1] + fib[i - 2]);
    i++;
  } while (fib.length < 10); // 条件が最後に評価される（必ず1回は実行）

  return fib;
}

// for 文を使うバージョン
export function fibonacciFor() {
  const fib = [1, 1]; // 最初の2つを用意

  // 3項目から10項目までを生成（8回繰り返す）
  for (let i = 2; i < 10; i++) {
    fib.push(fib[i - 1] + fib[i - 2]);
  }

  return fib;
}
