// Node.js の標準モジュールを読み込む
import * as fs from "node:fs";
import { promisify } from "node:util";

/**
 * ===============================
 * Promiseコンストラクタを使った方法
 * ===============================
 */

// fs.readdir はコールバック関数を受け取る非同期関数
// -> Promise を返す関数に変換
export function readdirPromise(path) {
  return new Promise((resolve, reject) => {
    fs.readdir(path, (err, files) => {
      if (err) {
        // エラーが発生した場合は reject() で呼び出し元に返す
        reject(err);
        return;
      }
      // 正常に読み込めたら resolve() で返す
      resolve(files);
    });
  });
}

export function statPromise(path) {
  return new Promise((resolve, reject) => {
    fs.stat(path, (err, stats) => {
      if (err) {
        reject(err);
        return;
      }
      resolve(stats);
    });
  });
}

/**
 * ===============================
 * util.promisify を使った方法
 * ===============================
 * promisify は Node.js の関数を自動で Promise 化してくれる便利関数
 */
export const readdirPromisify = promisify(fs.readdir);
export const statPromisify = promisify(fs.stat);
