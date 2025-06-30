// 配列を定義
const arr = ["r", "i", "c", "o", "h"];

// 配列のインデックス3（"o"）を delete 演算子で削除
delete arr[3];

// 削除後の配列の中身を確認
console.log(arr); // [ 'r', 'i', 'c', <1 empty item>, 'h' ]

// 配列の長さを確認
console.log(arr.length); // 5

/*
【メモ】

1. arr[3] には "o" が入っている
2. delete arr[3] を実行すると、arr[3] は削除される
   → しかし、配列の長さはそのまま（5）

3. console.log(arr) の結果：
   → [ 'r', 'i', 'c', <1 empty item>, 'h' ]
   → 削除された部分は「undefined」ではなく「empty」と表示されることが多い
      （これはブラウザやNode.jsの環境によって少し表記が異なる）

4. console.log(arr.length) の結果：
   → 長さは変わらず5のまま

【補足】
・値も削除して、長さも変えたい場合は delete ではなく splice を使う
  例：arr.splice(3, 1);
*/
