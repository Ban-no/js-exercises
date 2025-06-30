// try-catch-finally の実行順序を確認するコード

function demonstrateTryCatchFinally() {
  try {
    console.log("1. try ブロックの開始");

    // 故意にエラーを発生させる
    throw new Error("例外が発生しました");

    console.log("2. エラーの後");
  } catch (error) {
    console.log("3. catch ブロックでエラーをキャッチ:", error.message);
  } finally {
    console.log("4. finally ブロック");
  }

  console.log("5. try-catch-finally の外のコード");
}

// 関数を実行して順序を確認
demonstrateTryCatchFinally();

/*
## 出力結果
1. try ブロックの開始
3. catch ブロックでエラーをキャッチ: 例外が発生しました
4. finally ブロック
5. try-catch-finally の外のコード
*/
