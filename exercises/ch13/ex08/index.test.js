import { fetchFirstFileSize, fetchSumOfFileSizes } from "./index.js";
import * as fs from "node:fs/promises";
import { join } from "node:path";

const TEST_DIR = "./tmp-test-dir";

beforeAll(async () => {
  await fs.mkdir(TEST_DIR, { recursive: true });
  await fs.writeFile(join(TEST_DIR, "a.txt"), "hello");
  await fs.writeFile(join(TEST_DIR, "b.txt"), "world!!!");
});

afterAll(async () => {
  const files = await fs.readdir(TEST_DIR);
  for (const file of files) {
    await fs.unlink(join(TEST_DIR, file));
  }
  await fs.rmdir(TEST_DIR);
});

test("fetchFirstFileSize: 最初のファイルサイズを取得できる", async () => {
  const size = await fetchFirstFileSize(TEST_DIR);
  expect(typeof size).toBe("number");
  expect(size).toBeGreaterThan(0);
});

test("fetchSumOfFileSizes: 合計サイズが正しい", async () => {
  const total = await fetchSumOfFileSizes(TEST_DIR);
  const a = (await fs.stat(join(TEST_DIR, "a.txt"))).size;
  const b = (await fs.stat(join(TEST_DIR, "b.txt"))).size;
  expect(total).toBe(a + b);
});
