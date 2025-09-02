// クロージャを使って正の数だけを保持するオブジェクトを作成
export function PositiveNumber(initialValue) {
  // 初期値チェック
  if (initialValue <= 0) {
    throw new Error("require : x > 0");
  }

  // 外部から直接アクセスできない変数
  let x = initialValue;

  // ゲッターとセッターを持つオブジェクトを返す
  return {
    getX() {
      return x;
    },
    setX(newValue) {
      if (newValue <= 0) {
        throw new Error("require : x > 0");
      }
      x = newValue;
    },
  };
}
