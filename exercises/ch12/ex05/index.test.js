import fs from "fs";
import { readLines } from "./index.js";

// テスト用の一時ファイルを作成して削除するための準備
const TEST_FILE = "./ch12/ex05/test.txt";

beforeAll(() => {
  // UTF-8 でテキストファイルを作成
  fs.writeFileSync(TEST_FILE, "line1\nline2\nline3\nlastLineNoNewline");
});

afterAll(() => {
  // テスト後に削除
  fs.unlinkSync(TEST_FILE);
});

test("readLines reads lines one by one", () => {
  const gen = readLines(TEST_FILE);

  // next()で順に行を取得
  expect(gen.next().value).toBe("line1");
  expect(gen.next().value).toBe("line2");
  expect(gen.next().value).toBe("line3");
  expect(gen.next().value).toBe("lastLineNoNewline");
  expect(gen.next().done).toBe(true);
});

test("file is closed even if loop is broken", () => {
  const gen = readLines(TEST_FILE);

  // break相当：2行だけ読んで途中でやめる
  expect(gen.next().value).toBe("line1");
  expect(gen.next().value).toBe("line2");

  // イテレータを明示的に閉じる
  gen.return();

  // この時点で finally が実行されて closeSync() が呼ばれているはず
  // もう一度 next() を呼んでも done:true になる
  expect(gen.next().done).toBe(true);
});
