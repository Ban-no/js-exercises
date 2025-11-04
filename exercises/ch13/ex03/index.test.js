// index.js から作成した Promise 化関数を読み込む
import {
  readdirPromise, // fs.readdir を Promise 化したバージョン
  statPromise, // fs.stat を Promise 化したバージョン
  readdirPromisify, // util.promisify で作った readdir の Promise 版
  statPromisify, // util.promisify で作った stat の Promise 版
} from "./index.js";

// readdirPromise が正しく配列を返すかテスト
test("readdirPromise returns array of files", async () => {
  // カレントディレクトリのファイル・フォルダ一覧を取得
  const files = await readdirPromise(".");
  // 返ってきた files が配列であることを確認
  expect(Array.isArray(files)).toBe(true);
});

// statPromise が正しく stats オブジェクトを返すかテスト
test("statPromise returns stats object", async () => {
  // カレントディレクトリの情報を取得
  const stats = await statPromise(".");
  // stats がディレクトリかどうかを確認
  expect(stats.isDirectory()).toBe(true);
});

// util.promisify を使ったバージョンも正しく動くかテスト
test("promisify version works", async () => {
  // readdirPromisify でカレントディレクトリの一覧取得
  const files = await readdirPromisify(".");
  // statPromisify でカレントディレクトリの情報取得
  const stats = await statPromisify(".");
  // files が配列であることを確認
  expect(Array.isArray(files)).toBe(true);
  // stats がディレクトリかどうかを確認
  expect(stats.isDirectory()).toBe(true);
});

// エラー処理のテスト(存在しないパスを渡して reject が呼ばれるか確認)
test("readdirPromise handles errors", async () => {
  await expect(readdirPromise("nonexistent_path")).rejects.toThrow();
});
