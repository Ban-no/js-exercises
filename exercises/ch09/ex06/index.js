// TypedMap (コンポジション版)
export class TypedMap {
  constructor(keyType, valueType, entries) {
    this.keyType = keyType;
    this.valueType = valueType;
    this.map = new Map(); // 内部で Map を使う

    if (entries) {
      for (const [k, v] of entries) {
        this._checkTypes(k, v);
        this.map.set(k, v);
      }
    }
  }

  // 型チェック専用の内部メソッド
  _checkTypes(key, value) {
    if (this.keyType && typeof key !== this.keyType) {
      throw new TypeError(`${key} is not of type ${this.keyType}`);
    }
    if (this.valueType && typeof value !== this.valueType) {
      throw new TypeError(`${value} is not of type ${this.valueType}`);
    }
  }

  // set: 型チェックしてから内部Mapに委譲
  set(key, value) {
    this._checkTypes(key, value);
    this.map.set(key, value);
    return this;
  }

  // get: Mapに委譲
  get(key) {
    return this.map.get(key);
  }

  // has: Mapに委譲
  has(key) {
    return this.map.has(key);
  }

  // delete: Mapに委譲
  delete(key) {
    return this.map.delete(key);
  }

  // size: Mapに委譲
  get size() {
    return this.map.size;
  }

  // clear: Mapに委譲
  clear() {
    this.map.clear();
  }

  // 反復処理対応
  [Symbol.iterator]() {
    return this.map[Symbol.iterator]();
  }
}

/*
class TypedMap extends Map {
  constructor(keyType, valueType, entries) {
    //entriesが指定されている場合、型をチェック
    if (entries) {
      for (const [k, v] of entries) {
        if (typeof k !== keyType || typeof v !== valueType) {
          throw new TypeError(`Wrong type for entry [${k}, ${v}]`);
        }
      }
    }

    // （型でチェックされた）entriesを使ってスーパークラスを初期化する
    super(entries);

    // 次に、型を保存して、サブクラスを初期化する
    this.keyType = keyType;
    this.valueType = valueType;
  }

  // set()メソッドを再定義して、マップに追加されるキーと値のペアに対して型チェックを行うようにする
  set(key, value) {
    // keyやvalueの型が異なっている場合は、エラーをスローする
    if (this.keyType && typeof key !== this.keyType) {
      throw new TypeError(`${key} is not of type ${this.keyType}`);
    }
    if (this.valueType && typeof value !== this.valueType) {
      throw new TypeError(`${value} is not of type ${this.valueType}`);
    }
    return super.set(key, value);
  }
}
*/
