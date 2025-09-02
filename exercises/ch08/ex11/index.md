## 問題 8.11 🖋️

組み込み関数と自作関数の `toString()` の出力内容を確認しなさい

## toString() の出力内容を確認した結果

- 自作関数 ：関数のソースコード全体

  例）

  // 自作関数

  function greet() {
  console.log("こんにちは！");
  }

  console.log(greet.toString());

  // 自作関数の出力 →　function greet() {console.log("こんにちは！");}

- 組み込み関数 ："[native code]" を含む関数の定義形式

  例）

  // 組み込み関数

  console.log(Math.max.toString());

  組み込み関数の出力　→　function max() { [native code] }
