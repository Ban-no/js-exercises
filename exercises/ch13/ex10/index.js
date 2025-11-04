// ===== Node.js fs モジュール =====
import * as fs from "node:fs";
import * as fsPromises from "node:fs/promises";
import { join } from "node:path";

// ===== 問題 13.10 =====
// 問題13.4 の`fetchSumOfFileSizes` を `Promise.all` を使って書き換え、
// ディレクトリ内のファイルサイズを同時並行で取得
export async function fetchSumOfFileSizes(path) {
  try {
    // 1. ディレクトリ内のファイル名一覧を取得
    const files = await fsPromises.readdir(path);

    // 2. ファイルごとに fs.stat() の Promise を作成
    const statPromises = files.map((file) => fsPromises.stat(join(path, file)));

    // 3. すべての Promise が解決されるのを待つ
    const stats = await Promise.all(statPromises);

    // 4. ファイルサイズの合計を計算して返す
    return stats.reduce((total, s) => total + s.size, 0);
  } catch (err) {
    // エラーが発生したら throw する
    throw err;
  }
}

// 単一ファイルのサイズ取得（前回問題の復習用）
export async function fetchFirstFileSize(path) {
  try {
    const files = await fsPromises.readdir(path);
    if (files.length === 0) return null; // ファイルなし
    const stats = await fsPromises.stat(join(path, files[0]));
    return stats.size;
  } catch (err) {
    throw err;
  }
}
