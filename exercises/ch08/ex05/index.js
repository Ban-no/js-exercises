// 可変長引数を受け取る関数を定義
// ...values は配列のように受け取れる
export function sequenceToObject(...values) {
  // 個数が偶数でなければエラー
  if (values.length % 2 !== 0) {
    throw new Error("引数の個数が偶数ではありません");
  }

  const result = {};

  // 2つずつ処理していく
  for (let i = 0; i < values.length; i += 2) {
    const key = values[i];
    const value = values[i + 1];

    // 奇数番目（0始まりなので偶数インデックス）の値が string かどうかチェック
    if (typeof key !== "string") {
      throw new Error("キーは文字列である必要があります");
    }

    result[key] = value;
  }

  return result;
}
