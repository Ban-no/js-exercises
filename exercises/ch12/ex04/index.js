// filter関数：与えられたイテラブルのうち、条件を満たす値だけを順番に返す
export function filter(iterable, predicate) {
  const iterator = iterable[Symbol.iterator](); // イテレータを取得

  return {
    [Symbol.iterator]() {
      return this; // for...ofで回せるように自分自身を返す
    },
    next() {
      for (;;) {
        const v = iterator.next(); // 次の値を取り出す
        if (v.done || predicate(v.value)) {
          // doneなら終了、または条件を満たす値なら返す
          return v;
        }
      }
    },
  };
}

// 整数を無限に返すジェネレータ
export function* integers(start = 2) {
  let n = start;
  while (true) {
    yield n++; // 2, 3, 4, 5, ...
  }
}

// 無限に素数を返すジェネレータ（エラトステネスのふるいを再帰で実現）
export function* primes(iterable = integers()) {
  const first = iterable.next().value; // 最初の値を取り出す（最初は2）
  yield first; // 素数として返す

  // 次のイテラブルを、firstの倍数を除いたもので作る
  const filtered = filter(iterable, (n) => n % first !== 0);

  // 再帰的に次の素数を求める
  yield* primes(filtered);
}

/***
function filter(iterable, predicate){
    let iterator = iterable[Symbol.iterator]();
    return {
        [Symbol.iterator]() { return this; },
        next() {
            for(;;){
                let v = iterator.next();
                if (v.done || predicate(v.value)) {
                    return v;
                }
            }
        }
    };
}
***/
