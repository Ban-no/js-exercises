// for...in ループでのプロパティの列挙順序と継承の影響を確認するコード

console.log("=== プロパティの列挙順序と継承の確認 ===");

// Step 1: プロトタイプオブジェクトを作成
const proto = {};

// 数値名プロパティ（列挙可能）
proto[1] = "proto-1";
proto[2] = "proto-2";

// 文字列名プロパティ（列挙可能）
proto.alpha = "proto-alpha";
proto.beta = "proto-beta";

// 列挙可能なプロパティ
proto.visible = "proto-visible";

// Step 2: プロトタイプを継承したオブジェクトを作成
const obj = Object.create(proto);

// 同名の数値プロパティ → 上書きされる
obj[1] = "own-1";

// 異なる数値プロパティ
obj[3] = "own-3";

// 同名の文字列プロパティ → 上書きされる
obj.alpha = "own-alpha";

// 異なる文字列プロパティ
obj.gamma = "own-gamma";

// 同名のプロパティ名で列挙不可に設定
Object.defineProperty(obj, "visible", {
  value: "own-hidden-visible",
  enumerable: false,
});

// Step 3: for...in ループで列挙順序を確認
console.log("\n--- for...in で列挙されるプロパティ ---");
for (const key in obj) {
  console.log(key, ":", obj[key]);
}

/*
=== memo ===
このループで出力される順序：
1. 1 → "own-1"（自身の数値プロパティ）
2. 3 → "own-3"（自身の数値プロパティ）
3. alpha → "own-alpha"（自身の文字列プロパティ）
4. gamma → "own-gamma"（自身の文字列プロパティ）
5. 2 → "proto-2"（プロトタイプの数値プロパティ）
6. beta → "proto-beta"（プロトタイプの文字列プロパティ）
※ visible は enumerable: false のため、列挙されない
*/
