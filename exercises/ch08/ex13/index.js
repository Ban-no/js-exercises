function f(input) {
  const f = new Function(`return "Hello, " + ${input}`);
  console.log(f());
}

// 攻撃例：アラートを表示するコードを注入
f('"; alert("攻撃されました！"); //');
