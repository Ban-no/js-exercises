class Example {
  valueOf() {
    return 100;
  }

  toString() {
    return "これはExampleクラスです";
  }
}

let obj = new Example();

// ① valueOf() を自動で呼び出す（数値として扱う）
console.log(obj + 1); // 101（valueOf()の戻り値 100 + 1）

// ② toString() を自動で呼び出す（文字列として扱う）
console.log(`メッセージ: ${obj}`); // メッセージ: これはExampleクラスです
