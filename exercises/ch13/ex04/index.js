// Node.js の Promise 版 fs モジュールを読み込む
import * as fs from "node:fs/promises";
// パス結合用のモジュール
import { join } from "node:path";

/**
 * 指定ディレクトリ内の最初のファイルのサイズを返す関数（Promise 版）
 * @param {string} path - 調べるディレクトリのパス
 * @returns {Promise<number|null>} - 最初のファイルのサイズ（ファイルがない場合は null）
 */
export async function fetchFirstFileSize(path) {
  // ディレクトリ内のファイル一覧を取得（Promise 版）
  const files = await fs.readdir(path);

  // ファイルがない場合は null を返す
  if (files.length === 0) return null;

  // 最初のファイルのパスを作る
  const firstFile = join(path, files[0]);

  // ファイル情報を取得（Promise 版）
  const stats = await fs.stat(firstFile);

  // ファイルサイズを返す
  return stats.size;
}

/**
 * 指定ディレクトリ内の全ファイルサイズの合計を返す関数（Promise 版）
 * @param {string} path - 調べるディレクトリのパス
 * @returns {Promise<number>} - 合計ファイルサイズ
 */
export async function fetchSumOfFileSizes(path) {
  // ディレクトリ内のファイル一覧を取得
  const files = await fs.readdir(path);

  let total = 0;

  // for...of 文を使って順に処理
  for (const file of files) {
    const stats = await fs.stat(join(path, file));
    total += stats.size; // サイズを足していく
  }

  // 合計サイズを返す
  return total;
}
