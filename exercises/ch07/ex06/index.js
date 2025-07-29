// 問題7.4のデータ
const data = [
  { name: "Alice", class: "A", math: 10, chemistry: 30, geography: 20 },
  { name: "Bob", class: "A", math: 50, chemistry: 50, geography: 60 },
  { name: "Carol", class: "A", math: 70, chemistry: 55, geography: 30 },
  { name: "Dave", class: "B", math: 40, chemistry: 20, geography: 60 },
  { name: "Ellen", class: "B", math: 60, chemistry: 70, geography: 40 },
  { name: "Frank", class: "B", math: 90, chemistry: 70, geography: 80 },
  { name: "Isaac", class: "C", math: 70, chemistry: 40, geography: 50 },
  { name: "Justin", class: "C", math: 80, chemistry: 40, geography: 30 },
  { name: "Mallet", class: "C", math: 60, chemistry: 70, geography: 90 },
];

// 比較関数を使って複数条件で降順ソート
const sorted = [...data].sort((a, b) => {
  // ① math（降順）
  if (b.math !== a.math) {
    return b.math - a.math;
  }
  // ② chemistry（降順）
  if (b.chemistry !== a.chemistry) {
    return b.chemistry - a.chemistry;
  }
  // ③ geography（降順）
  return b.geography - a.geography;
});

console.log("【ソート結果】");
sorted.forEach((s) => {
  console.log(
    `${s.name}: math=${s.math}, chem=${s.chemistry}, geo=${s.geography}`
  );
});

/*
＝＝＝実行結果＝＝＝
Frank: math=90, chem=70, geo=80
Justin: math=80, chem=40, geo=30
Carol: math=70, chem=55, geo=30
Isaac: math=70, chem=40, geo=50
Mallet: math=60, chem=70, geo=90
Ellen: math=60, chem=70, geo=40
Bob: math=50, chem=50, geo=60
Dave: math=40, chem=20, geo=60
Alice: math=10, chem=30, geo=20
＝＝＝＝＝＝＝＝＝＝
*/
