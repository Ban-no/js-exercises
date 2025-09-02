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
