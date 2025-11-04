import { walk } from "./index.js";
import fs from "fs/promises";
import path from "path";

describe("walk async generator", () => {
  const testDir = "./testDir";

  beforeAll(async () => {
    // テスト用のディレクトリ・ファイル構造を作成
    await fs.mkdir(path.join(testDir, "B", "C"), { recursive: true });
    await fs.writeFile(path.join(testDir, "foo.txt"), "foo");
    await fs.writeFile(path.join(testDir, "B", "C", "buz.txt"), "buz");
    await fs.mkdir(path.join(testDir, "A"));
  });

  afterAll(async () => {
    // テスト用ディレクトリを削除
    await fs.rm(testDir, { recursive: true, force: true });
  });

  test("walk returns all files and directories", async () => {
    const results = [];
    for await (const elem of walk(testDir)) {
      results.push(elem);
    }

    const paths = results.map((r) => r.path).sort();
    expect(paths).toEqual(
      [
        path.join(testDir, "A"),
        path.join(testDir, "B"),
        path.join(testDir, "B", "C"),
        path.join(testDir, "B", "C", "buz.txt"),
        path.join(testDir, "foo.txt"),
        testDir,
      ].sort()
    );

    const dirs = results.filter((r) => r.isDirectory).map((r) => r.path);
    expect(dirs).toContain(path.join(testDir, "B", "C"));
  });
});
