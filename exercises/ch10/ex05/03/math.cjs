// 足し算の関数を定義
function sum(a, b) {
  return a + b;
}

// 引き算の関数を定義
function subtract(a, b) {
  return a - b;
}

// 複数の関数をまとめてエクスポートする
module.exports = {
  add: sum,
  subtract,
};
