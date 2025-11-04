// index.js から関数をインポート
import { fetchFirstFileSize, fetchSumOfFileSizes } from "./index.js";
// Node.js 標準の fs/promises を使ってテスト用のファイルを作る
import * as fs from "node:fs/promises";
import { join } from "node:path";

const TEST_DIR = "test_dir";

beforeAll(async () => {
  // テスト用ディレクトリを作成
  await fs.mkdir(TEST_DIR, { recursive: true });

  // テスト用ファイルをいくつか作成（中身の長さ＝ファイルサイズ）
  await fs.writeFile(join(TEST_DIR, "a.txt"), "12345"); // 5 bytes
  await fs.writeFile(join(TEST_DIR, "b.txt"), "12"); // 2 bytes
});

afterAll(async () => {
  // テスト後にディレクトリを削除（再帰的に削除）
  await fs.rm(TEST_DIR, { recursive: true, force: true });
});

test("fetchFirstFileSize returns size of the first file", async () => {
  const size = await fetchFirstFileSize(TEST_DIR);
  // 最初のファイルのサイズが数値で返る
  expect(typeof size).toBe("number");
  expect(size).toBeGreaterThan(0);
});

test("fetchSumOfFileSizes returns total size of files", async () => {
  const total = await fetchSumOfFileSizes(TEST_DIR);
  // 合計サイズ = 5 + 2 = 7
  expect(total).toBe(7);
});
