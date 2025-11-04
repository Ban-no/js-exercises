import { fetchSumOfFileSizes, fetchFirstFileSize } from "./index.js";
import * as fsPromises from "node:fs/promises";
import { join } from "node:path";

describe("fetchSumOfFileSizes", () => {
  const testDir = "./test_dir";

  beforeAll(async () => {
    // テスト用ディレクトリ作成
    await fsPromises.mkdir(testDir, { recursive: true });
    // ファイル作成
    await fsPromises.writeFile(join(testDir, "a.txt"), "1234"); // 4 byte
    await fsPromises.writeFile(join(testDir, "b.txt"), "12345678"); // 8 byte
    await fsPromises.writeFile(join(testDir, "c.txt"), "12"); // 2 byte
  });

  afterAll(async () => {
    // テスト用ディレクトリ削除
    const files = await fsPromises.readdir(testDir);
    for (const f of files) await fsPromises.unlink(join(testDir, f));
    await fsPromises.rmdir(testDir);
  });

  it("合計サイズを返す", async () => {
    const sum = await fetchSumOfFileSizes(testDir);
    expect(sum).toBe(4 + 8 + 2); // 14
  });

  it("空ディレクトリなら0を返す", async () => {
    const emptyDir = "./empty_dir";
    await fsPromises.mkdir(emptyDir, { recursive: true });
    const sum = await fetchSumOfFileSizes(emptyDir);
    expect(sum).toBe(0);
    await fsPromises.rmdir(emptyDir);
  });
});

describe("fetchFirstFileSize", () => {
  const testDir = "./first_file_test";

  beforeAll(async () => {
    await fsPromises.mkdir(testDir, { recursive: true });
    await fsPromises.writeFile(join(testDir, "x.txt"), "abc"); // 3 byte
    await fsPromises.writeFile(join(testDir, "y.txt"), "defgh"); // 5 byte
  });

  afterAll(async () => {
    const files = await fsPromises.readdir(testDir);
    for (const f of files) await fsPromises.unlink(join(testDir, f));
    await fsPromises.rmdir(testDir);
  });

  it("最初のファイルサイズを返す", async () => {
    const size = await fetchFirstFileSize(testDir);
    expect(size).toBe(3); // x.txt のサイズ
  });

  it("空ディレクトリなら null を返す", async () => {
    const emptyDir = "./empty_first";
    await fsPromises.mkdir(emptyDir, { recursive: true });
    const size = await fetchFirstFileSize(emptyDir);
    expect(size).toBe(null);
    await fsPromises.rmdir(emptyDir);
  });
});
