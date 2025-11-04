import fs from "fs/promises";
import path from "path";

/**
 * 指定されたディレクトリ内を再帰的に探索する非同期ジェネレータ
 * @param {string} rootPath - 探索を始めるディレクトリのパス
 */
export async function* walk(rootPath) {
  // fs.promises.stat で非同期に情報を取得
  const stats = await fs.stat(rootPath);

  // 現在のパスを返す
  yield {
    path: rootPath,
    isDirectory: stats.isDirectory(),
  };

  // ディレクトリでなければ終了
  if (!stats.isDirectory()) {
    return;
  }

  // ディレクトリなら中身を非同期で取得
  const entries = await fs.readdir(rootPath);

  for (const entry of entries) {
    const fullPath = path.join(rootPath, entry);
    // 再帰的に非同期ジェネレータを展開
    yield* walk(fullPath);
  }
}
