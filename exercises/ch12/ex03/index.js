// ジェネレータをエクスポートするファイル
/**
 * resetibleCounter
 *
 * - next() を呼ぶと 1,2,3... と増えるカウンタを返すジェネレータ
 * - iterator.throw("reset") を呼ぶとカウンタがリセットされ、次の next() は 1 を返す
 * - iterator.throw(new Error(...)) のように Error を投げると、そのエラーは再スローされる
 *
 * 文法ポイント：
 * - function* はジェネレータ関数（yield が使える）
 * - generator.throw(value) は、現在の yield 式の位置に例外を投げる
 * - generator 内で try/catch を使えば throw を捕まえて振る舞いを変えられる
 */
export function* resetibleCounter() {
  let count = 0;

  // 無限ループで常に値を返すジェネレータにする
  while (true) {
    try {
      // next() が呼ばれたらここで yield する
      count += 1;
      yield count;
    } catch (e) {
      // generator.throw(...) で投げられた値はここに入る
      // リセット目的のシグナル（'reset'）ならカウンタをリセットして続行
      if (e === "reset") {
        count = 0; // 次のループで yield は 1 になる
        // ↓ throw直後に呼び出し側のthrow()を完了させるためのyieldを1回挟む　… エラー対応
        yield count;
        // 続行 -> while ループの先頭に戻り、再度 yield を待つ
      } else {
        // それ以外の例外は再スロー（呼び出し側で捕まえてもらう）
        throw e;
      }
    }
  }
}
