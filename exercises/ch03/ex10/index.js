// Symbol()の場合（常に一意）
console.log("=== Symbol ===");

// シンボルの生成（同じ文字列でも別のシンボル）
const sym1 = Symbol("key");
const sym2 = Symbol("key");

// オブジェクトにシンボルをキーとしてプロパティを追加
const obj = {
  [sym1]: "value from sym1",
  [sym2]: "value from sym2",
};

// シンボルを使って値を取得
console.log(obj[sym1]); // → "value from sym1"
console.log(obj[sym2]); // → "value from sym2"

// シンボル自体は === にならない
console.log(sym1 === sym2); // → false

// Symbol.for() の場合（同名なら同一）
console.log("=== Symbol.for() ===");

// Symbol.for() を使ってシンボルを生成（同じ文字列なら同じシンボル）
const shared1 = Symbol.for("shared");
const shared2 = Symbol.for("shared");

// 同じ文字列から同じシンボルが作られる（共有される）
console.log(shared1 === shared2); // → true

const obj2 = {
  [shared1]: "shared value",
};

// shared2 を使って同じプロパティにアクセスできる
console.log(obj2[shared2]); // → "shared value"

/*
// Symbol() を使って同じ説明のシンボルを2つ作成
let symA = Symbol("mySymbol");
let symB = Symbol("mySymbol");

// オブジェクトを作成し、2つのシンボルをプロパティキーとして設定
let obj = {};
obj[symA] = "symAの値";
obj[symB] = "symBの値";

// シンボル変数を使って値を取得
console.log("obj[symA] :", obj[symA]); // => "symAの値"
console.log("obj[symB] :", obj[symB]); // => "symBの値"

// 確認：symAとsymBは異なるSymbolであること
console.log("symA === symB :", symA === symB); // => false

// toString()で中身の確認（デバッグ用）
console.log("symA.toString():", symA.toString()); // => Symbol(mySymbol)
console.log("symB.toString():", symB.toString()); // => Symbol(mySymbol)

// ===== Symbol.for() を使った場合 =====
let shared1 = Symbol.for("sharedKey");
let shared2 = Symbol.for("sharedKey");

let obj2 = {};
obj2[shared1] = "共有されたシンボルの値";

console.log("shared1 === shared2 :", shared1 === shared2); // true（同じシンボル）
console.log("obj2[shared1]       :", obj2[shared1]); // 共有されたシンボルの値
console.log("obj2[shared2]       :", obj2[shared2]); // 共有されたシンボルの値
console.log("shared1.toString()  :", shared1.toString()); // Symbol(sharedKey)
console.log("Symbol.keyFor(shared2):", Symbol.keyFor(shared2)); // sharedKey
*/
