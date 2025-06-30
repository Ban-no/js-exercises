// 確認したい値を定義
const values = {
  undefinedValue: undefined,
  nullValue: null,
  objectValue: { name: "Alice" },
  nanValue: NaN,
  numberValue: 42,
  functionValue: function () {},
};

// 各値の typeof をコンソールに出力します
for (const [key, value] of Object.entries(values)) {
  console.log(`${key}:`, typeof value);
}

/*
--- typeof 演算子 予想と結果 ---

1. undefinedValue: undefined
   初心者の予想：'undefined'
   実際の結果  ：'undefined'
   → 直感どおりの結果。未定義の値には 'undefined' が返る。

2. nullValue: null
   初心者の予想：'null'
   実際の結果  ：'object'
   → null は "何もない" を表すが typeof では 'object' になる。

3. objectValue: { name: 'Alice' }
   初心者の予想：'object'
   実際の結果  ：'object'
   → 通常のオブジェクトは 'object'

4. nanValue: NaN
   初心者の予想：'NaN'
   実際の結果  ：'number'
   → Not a Number（数ではない）という名前なのに 'number'。NaN も数値型の一種。

5. numberValue: 42
   初心者の予想：'number'
   実際の結果  ：'number'
   → 単なる数値は 'number'

6. functionValue: function () {}
   初心者の予想：'object' または 'function'
   実際の結果  ：'function'
   → 関数はオブジェクトの一種だが typeof は特別に 'function' を返す。

*/
