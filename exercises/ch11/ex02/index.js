// f はオブジェクトを1つ引数に取る関数
function cache(f) {
  // この関数を実装する
  const wm = new WeakMap();
  return function (obj) {
    if (wm.has(obj)) return wm.get(obj);
    const result = f(obj);
    wm.set(obj, result);
    return result;
  };
}

function slowFn(obj) {
  // 時間のかかる処理
  return { value: obj }; // 内容が同じでも別オブジェクトを返す
}

// cachedSlowFnを同じ引数で複数回呼び出すと、2回目以降はキャッシュが返る
const cachedSlowFn = cache(slowFn);

// まとめて export
export { cache, slowFn, cachedSlowFn };
