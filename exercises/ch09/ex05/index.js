// instanceOf 関数を自作する
// object が constructor のインスタンスかどうかを調べる
// instanceof を使わずに、プロトタイプチェーンをたどる方法で実装する

export function instanceOf(object, constructor) {
  // object が null や undefined の場合はインスタンスではない
  if (object == null) return false;

  // constructor が関数でない場合はエラーにしておく
  if (typeof constructor !== "function") {
    throw new TypeError("constructor must be a function");
  }

  // constructor.prototype を取得
  const targetPrototype = constructor.prototype;

  // object のプロトタイプをたどっていく
  let proto = Object.getPrototypeOf(object);

  while (proto !== null) {
    if (proto === targetPrototype) {
      return true; // 一致したら true
    }
    proto = Object.getPrototypeOf(proto); // 上のプロトタイプに進む
  }

  return false; // 見つからなければ false
}
