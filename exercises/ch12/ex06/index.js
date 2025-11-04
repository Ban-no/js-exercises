// Node.jsのファイル操作モジュールを読み込む
import fs from "fs";
import path from "path";

/**
 * 指定されたディレクトリ内を再帰的に探索するジェネレータ関数
 * @param {string} rootPath - 探索を始めるディレクトリのパス
 */
export function* walk(rootPath) {
  // fs.statSync() でファイル情報（ディレクトリかどうか等）を取得
  const stats = fs.statSync(rootPath);

  // 現在のパスを yield で返す
  yield {
    path: rootPath,
    isDirectory: stats.isDirectory(),
  };

  // ディレクトリでなければ、ここで終了
  if (!stats.isDirectory()) {
    return;
  }

  // ディレクトリなら中身を読み込む
  const entries = fs.readdirSync(rootPath);

  // 各中身に対して再帰的に walk() を呼び出す
  for (const entry of entries) {
    const fullPath = path.join(rootPath, entry); // 相対パスを絶対パスにする

    // 再帰呼び出しを行い、内部の要素を1つずつyieldする
    yield* walk(fullPath);
    // ↑ yield* は「別のジェネレータの中身をまるごと展開して返す」特別な構文
  }
}
