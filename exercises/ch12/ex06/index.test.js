import fs from "fs";
import path from "path";
import { walk } from "./index.js";

const testDir = path.join(process.cwd(), "testdir");

// テスト前にテスト用ディレクトリとファイルを作る
beforeAll(() => {
  fs.mkdirSync(testDir, { recursive: true });
  fs.writeFileSync(path.join(testDir, "a.txt"), "Hello");
  fs.mkdirSync(path.join(testDir, "subdir"));
  fs.writeFileSync(path.join(testDir, "subdir", "b.txt"), "World");
});

// テスト後に削除（掃除）
afterAll(() => {
  fs.rmSync(testDir, { recursive: true, force: true });
});

test("walk() should recursively list files and directories", () => {
  const results = [...walk(testDir)]; // すべて展開して配列にする

  // ファイルとディレクトリが全部出てくるかチェック
  const paths = results.map((r) => path.basename(r.path));

  expect(paths).toEqual(
    expect.arrayContaining(["testdir", "a.txt", "subdir", "b.txt"])
  );

  // ディレクトリかどうかの判定も正しいか確認
  const testDirInfo = results.find((r) => path.basename(r.path) === "testdir");
  const aTxtInfo = results.find((r) => path.basename(r.path) === "a.txt");
  const subDirInfo = results.find((r) => path.basename(r.path) === "subdir");

  expect(testDirInfo.isDirectory).toBe(true);
  expect(aTxtInfo.isDirectory).toBe(false);
  expect(subDirInfo.isDirectory).toBe(true);
});
