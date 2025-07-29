// assign 関数：Object.assign() と等価な処理を実装
export function assign(target, ...sources) {
  // null または undefined を target に渡された場合は TypeError を投げる
  if (target == null) {
    throw new TypeError("Cannot convert undefined or null to object");
  }

  // ターゲットをオブジェクトに変換（プリミティブでも受け付ける）
  const to = Object(target);

  for (const source of sources) {
    // null または undefined の場合は無視する
    if (source == null) continue;

    // 自身のプロパティ（列挙可能な文字列キー）をコピー
    for (const key of Object.keys(source)) {
      to[key] = source[key];
    }

    // Symbol プロパティもコピー（列挙可能なもののみ）
    const symbols = Object.getOwnPropertySymbols(source);
    for (const sym of symbols) {
      if (Object.prototype.propertyIsEnumerable.call(source, sym)) {
        to[sym] = source[sym];
      }
    }
  }

  return to;
}
