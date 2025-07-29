// 親オブジェクトを定義　※親＝プロトタイプ
// greeting という独自のプロパティを持たせる。
const parent = {
  greeting: "Hello",
};
// Object.create を使って parent をプロトタイプに持つ新しいオブジェクト child を作る。
// child 自体は greeting を持っていないが、親(parent)から継承される。
const child = Object.create(parent);
// Object.getPrototypeOf(child) は child のプロトタイプ（親）を返す。
// それが parent と同じであるかを確認
console.log(Object.getPrototypeOf(child) === parent); // true

//ここまでが問題の解答
//以下参考まで
console.log(child); // {}　childは空のオブジェクト
console.log(parent); // { greeting: "Hello" }
console.log(parent.greeting); // "Hello"
console.log(child.greeting); // "Hello"　親から継承されたため、child.greeting も "Hello" を返す

// child に greeting プロパティを追加
child.greeting = "Hi";
// これで child は独自の greeting プロパティを持つようになる。
console.log(child.greeting); // "Hi"
