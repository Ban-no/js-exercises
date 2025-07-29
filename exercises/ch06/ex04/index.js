console.log("=== Object.defineProperty の動作確認 ===");

// 空のオブジェクトを作成
const obj = {};

// Object.defineProperty でプロパティ 'a' を定義
Object.defineProperty(obj, "a", {
  value: 10,
  writable: false, // 書き換え不可
  enumerable: false, // 列挙されない
  configurable: false, // 削除不可
});

// 初期値確認
console.log("初期値:", obj.a); // 10

// === writable: false の確認 ===
console.log("\n--- writable: false の確認 ---");
try {
  obj.a = 20; // 書き換えようとするとエラー
} catch (err) {
  console.log("書き換えエラー:", err.message);
}
console.log("書き換え後も値は:", obj.a); // 10のまま

// === configurable: false の確認 ===
console.log("\n--- configurable: false の確認 ---");
try {
  const deleteResult = delete obj.a; // 削除しようとするとエラー
  console.log("削除できた？:", deleteResult);
} catch (err) {
  console.log("削除エラー:", err.message);
}
console.log("削除後の値:", obj.a); // 10のまま

// === enumerable: false の確認 ===
console.log("\n--- enumerable: false の確認 ---");
console.log("hasOwnProperty('a'):", obj.hasOwnProperty("a")); // true
console.log("propertyIsEnumerable('a'):", obj.propertyIsEnumerable("a")); // false
console.log("Object.keys(obj):", Object.keys(obj)); // []

// for...in でも出てこない
console.log("for...in で出てくるプロパティ:");
for (let key in obj) {
  console.log(key); // 何も出力されない
}

/* 
=== 動作確認結果 ===
=== Object.defineProperty の動作確認 ===
初期値: 10

--- writable: false の確認 ---
書き換えエラー: Cannot assign to read only property 'a' of object '#<Object>'
書き換え後も値は: 10

--- configurable: false の確認 ---
削除エラー: Cannot delete property 'a' of #<Object>
削除後の値: 10

--- enumerable: false の確認 ---
hasOwnProperty('a'): true
propertyIsEnumerable('a'): false
Object.keys(obj): []
for...in で出てくるプロパティ: // 何も出力されない


=== まとめ ===
- writable: false の場合、値の書き換えができない。
- configurable: false の場合、プロパティの削除や属性の変更ができない。
- enumerable: false の場合、プロパティは列挙されない（Object.keys() や for...in で出てこない）。
- ただし、hasOwnProperty() は true を返す。
- これらの属性は、オブジェクトのプロパティの挙動を制御するために非常に有用。
*/
