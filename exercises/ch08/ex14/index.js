// any 関数: 複数の関数を受け取って、新しい関数を返す
// 新しい関数は、渡された引数に対して「どれか1つでも true を返したら true」
export function any(...fns) {
  return function (x) {
    // fns のどれかが true なら true
    return fns.some((fn) => fn(x));
  };
}

// catching 関数: f がエラーを出したら、handler に処理を渡す
export function catching(f, handler) {
  return function (...args) {
    try {
      // f を実行
      return f(...args);
    } catch (e) {
      // エラーが起きたら handler に渡して返す
      return handler(e);
    }
  };
}
