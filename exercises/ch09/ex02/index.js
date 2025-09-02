// クラス C を定義
export class C {
  // プライベート変数 _x を初期化（最初は 0）
  constructor() {
    this._x = 0;
  }

  // ゲッター：c.x のようにアクセスするとこの関数が呼ばれる
  get x() {
    // 現在の値を一時的に保存
    const current = this._x;

    // 値を1増やす（次回の呼び出しのため）
    this._x++;

    // 今回の値を返す
    return current;
  }
}
