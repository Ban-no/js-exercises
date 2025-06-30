// ブロック1
{
  let a = 1;
  let b = 2;
  let obj = { a: 3, b: 4 };

  // 元のコード: with (obj) { a = b; }
  // 意味：obj.a = obj.b として解釈されていた
  obj.a = obj.b;

  console.log({ a, b, obj });
  // 出力: { a: 1, b: 2, obj: { a: 4, b: 4 } }
}

// ブロック2
{
  let a = 1;
  let b = 2;
  let obj = { b: 4 };

  // 元のコード: with (obj) { a = b; }
  // 意味：a = obj.b（a は外側の変数、b は obj.b を参照）
  a = obj.b;

  console.log({ a, b, obj });
  // 出力: { a: 4, b: 2, obj: { b: 4 } }
}

// ブロック3
{
  let a = 1;
  let b = 2;
  let obj = { a: 3 };

  // 元のコード: with (obj) { a = b; }
  // 意味：obj.a = b（obj.a を更新）
  obj.a = b;

  console.log({ a, b, obj });
  // 出力: { a: 1, b: 2, obj: { a: 2 } }
}

// ブロック4
{
  let a = 1;
  let b = 2;
  let obj = {};

  // 元のコード: with (obj) { a = b; }
  // 意味：obj に a, b がない → a = b（a は外側の変数）
  a = b;

  console.log({ a, b, obj });
  // 出力: { a: 2, b: 2, obj: {} }
}
