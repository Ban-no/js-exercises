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
