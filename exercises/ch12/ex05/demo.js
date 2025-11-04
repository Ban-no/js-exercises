import fs from "fs";
import path from "path";
import { readLines } from "./index.js"; // ESMは拡張子も必要

// デモ用のテキストファイル作成
const demoFile = path.join("./", "test.txt");
fs.writeFileSync(demoFile, "line1\nline2\nline3\nline4\nline5", "utf-8");

// 1行ずつ読み出すジェネレータ
const gen = readLines(demoFile);

console.log("=== 1行ずつ next() で取得 ===");
console.log(gen.next().value); // line1
console.log(gen.next().value); // line2
console.log(gen.next().value); // line3

console.log("\n=== for-of でループ ===");
for (const line of gen) {
  console.log("for-of yield:", line);
  if (line === "line5") break; // break しても close される
}

// ファイル削除（デモ後の掃除）
fs.unlinkSync(demoFile);
console.log("\n=== demo 完了 ===");
