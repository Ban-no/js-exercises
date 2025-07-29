// 極座標をもとに、x・yプロパティを計算・設定できるオブジェクト
export const polarPoint = {
  // 初期状態の極座標
  r: 0,
  theta: 0,

  // xゲッター：極座標からxを計算
  get x() {
    return this.r * Math.cos(this.theta);
  },

  // xセッター：新しいxを指定されたとき、rとthetaを更新
  set x(val) {
    if (Number.isNaN(val)) {
      throw new Error("xにNaNは設定できません");
    }
    const y = this.y; // 現在のyと組み合わせてr, θを更新
    this.r = Math.sqrt(val ** 2 + y ** 2);
    this.theta = Math.atan2(y, val);
  },

  // yゲッター：極座標からyを計算
  get y() {
    return this.r * Math.sin(this.theta);
  },

  // yセッター：新しいyを指定されたとき、rとthetaを更新
  set y(val) {
    if (Number.isNaN(val)) {
      throw new Error("yにNaNは設定できません");
    }
    const x = this.x; // 現在のxと組み合わせてr, θを更新
    this.r = Math.sqrt(x ** 2 + val ** 2);
    this.theta = Math.atan2(val, x);
  },
};
