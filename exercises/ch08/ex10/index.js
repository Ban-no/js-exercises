// addMyCall は、関数 f に myCall というメソッドを追加する
export function addMyCall(f) {
  // f に myCall プロパティを追加する
  f.myCall = function (thisArg, ...args) {
    // bind を使って this を thisArg に固定した新しい関数を作る
    const bound = f.bind(thisArg);
    // その新しい関数に、残りの引数を渡して実行する
    return bound(...args);
  };
}
