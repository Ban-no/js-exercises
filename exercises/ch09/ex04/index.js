//
// ---- class 記法 ----
//

// 戦士クラス
class Warrior {
  constructor(atk) {
    this.atk = atk; // 攻撃力
  }

  // 攻撃メソッド: 攻撃力の2倍を返す
  attack() {
    return this.atk * 2;
  }
}

// 魔法戦士クラス (戦士を継承)
class MagicWarrior extends Warrior {
  constructor(atk, mgc) {
    super(atk); // Warrior のコンストラクタを呼び出す
    this.mgc = mgc; // 魔力
  }

  // 攻撃メソッド: 戦士の攻撃に魔力を加える
  attack() {
    return super.attack() + this.mgc;
  }
}

//
// ---- prototype 記法 ----
//

// 戦士コンストラクタ
function WarriorProto(atk) {
  this.atk = atk;
}

// 戦士の attack メソッドを prototype に定義
WarriorProto.prototype.attack = function () {
  return this.atk * 2;
};

// 魔法戦士コンストラクタ
function MagicWarriorProto(atk, mgc) {
  // WarriorProto のコンストラクタを継承
  WarriorProto.call(this, atk);
  this.mgc = mgc;
}

// 継承: MagicWarriorProto の prototype を WarriorProto のオブジェクトにする
MagicWarriorProto.prototype = Object.create(WarriorProto.prototype);

// constructor の参照を修正
MagicWarriorProto.prototype.constructor = MagicWarriorProto;

// attack をオーバーライド
MagicWarriorProto.prototype.attack = function () {
  // 親クラスの attack を呼んで、その結果に mgc を足す
  return WarriorProto.prototype.attack.call(this) + this.mgc;
};

export { Warrior, MagicWarrior, WarriorProto, MagicWarriorProto };
