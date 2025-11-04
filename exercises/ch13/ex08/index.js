// ファイルやディレクトリ操作を Promise で行うモジュールを読み込み
import { join } from "node:path";
import * as fs from "node:fs/promises";

/**
 * 指定されたフォルダ内で最初のファイルのサイズを取得する
 * @param {string} path - 対象フォルダのパス
 * @returns {Promise<number|null>} 最初のファイルのサイズ。空フォルダなら null。
 */
export async function fetchFirstFileSize(path) {
  // await：fs.readdir() の結果（ファイル名一覧）を待つ
  const files = await fs.readdir(path);

  // ファイルがなければ null を返す
  if (files.length === 0) return null;

  // join() でフォルダ名＋ファイル名を結合し、ファイル情報を取得
  const stats = await fs.stat(join(path, files[0]));

  // ファイルサイズを返す
  return stats.size;
}

/**
 * 指定フォルダ内のすべてのファイルサイズを合計して返す
 * @param {string} path - 対象フォルダのパス
 * @returns {Promise<number>} 合計サイズ（バイト単位）
 */
export async function fetchSumOfFileSizes(path) {
  // readdir() の結果を待ってファイル名リストを取得
  const files = await fs.readdir(path);

  // 合計値を初期化
  let total = 0;

  // for...of で1ファイルずつ処理
  for (const file of files) {
    // 各ファイルのサイズ情報を取得（awaitで順番に実行）
    const stats = await fs.stat(join(path, file));
    total += stats.size; // サイズを加算
  }

  // 合計サイズを返す
  return total;
}
