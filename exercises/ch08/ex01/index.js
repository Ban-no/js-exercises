// 1. 文字 c を n 回コンソールに出力し、その文字 c を n 個含む配列を返す関数
// アロー関数に () が必要なのは、引数が複数あるから
// 戻り値がオブジェクトではないので、波括弧 {} を使って明示的に return
export const repeatChar = (n, c) => {
  for (let i = 0; i < n; i++) {
    console.log(c); // 文字を n 回表示
  }
  return Array(n).fill(c); // 同じ文字 c を n 個含む配列を返す
};

// 2. 数値 x を受け取り、その二乗を返す関数
// 引数が1つだけの場合、() は省略可能
// 戻り値が1行で済むため、波括弧と return は不要（暗黙の return）
export const square = (x) => x * x;

// 3. 引数なしで、現在時刻を now プロパティとして持つオブジェクトを返す関数
// 引数がない場合は () が必要
// オブジェクトを返す場合、{} のままだと関数の本体と解釈されてしまうため () で囲む
export const getNowObject = () => ({ now: new Date() });
