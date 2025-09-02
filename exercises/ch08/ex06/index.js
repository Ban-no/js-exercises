// arguments を使わずに残余引数 ...values を利用する
// 呼び出しごとに渡された引数を配列の形で保存する
const args = [];

// 可変長引数を配列として受け取る
function call(...values) {
  // 受け取った配列をそのまま args に追加
  args.push(values);
}

// 実行例
call(1, 2, 3);
call("A", "B");

console.log(args[0]); // [1, 2, 3]
console.log(args[1]); // ["A", "B"]
