export class TypeMap {
  constructor() {
    this.map = new Map();
  }

  set(key, value) {
    if (typeof key !== "function") {
      throw new Error("Key must be a constructor function");
    }

    // プリミティブ型はラッパークラスで確認
    if (
      (key === String && typeof value === "string") ||
      (key === Number && typeof value === "number") ||
      (key === Boolean && typeof value === "boolean")
    ) {
      this.map.set(key, value);
      return this;
    }

    // インスタンスかどうか確認
    if (!(value instanceof key)) {
      throw new Error(
        `Value must be an instance of ${key.name}, got ${typeof value}`
      );
    }

    this.map.set(key, value);
    return this;
  }

  get(key) {
    return this.map.get(key);
  }
}
