// クラスをデフォルトエクスポート
export default class Human {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    return `Hello, my name is ${this.name}, and I am ${this.age} years old.`;
  }
}
