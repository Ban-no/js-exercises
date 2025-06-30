// 文字列が正しくエスケープされるかどうかテストする

import { escapeStringIfElse, escapeStringSwitch } from "./index.js";

// テスト対象の入力文字列（特殊文字を含む）
const input = "\0\b\t\n\v\f\r\"\'\\ normal text";

// エスケープ後に期待される出力
const expected = "\\0\\b\\t\\n\\v\\f\\r\\\"\\'\\\\ normal text";

test("escapeStringIfElse correctly escapes special characters", () => {
  expect(escapeStringIfElse(input)).toBe(expected);
});

test("escapeStringSwitch correctly escapes special characters", () => {
  expect(escapeStringSwitch(input)).toBe(expected);
});
