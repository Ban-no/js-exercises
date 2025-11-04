// Node.js の「fs」モジュールを使ってファイルを読み書きする
import fs from "fs";

/**
 * ファイルを1行ずつ返すジェネレータ関数
 * @param {string} filePath - 読み込むファイルのパス
 */
export function* readLines(filePath) {
  // 一度に読み込むバイト数（＝バッファサイズ）
  const BUFFER_SIZE = 64;
  const buffer = Buffer.alloc(BUFFER_SIZE); // 空のバッファを確保
  let fd; // ファイルディスクリプタ（ファイルを開いたときのハンドル）
  let leftover = ""; // バッファをまたいで途中で切れた行を保持する

  try {
    // ファイルを開く（読み取り専用: "r"）
    fd = fs.openSync(filePath, "r");

    let bytesRead;
    // ファイルの終わりに到達するまで繰り返す
    while ((bytesRead = fs.readSync(fd, buffer, 0, BUFFER_SIZE, null)) > 0) {
      // 読み込んだ部分を文字列に変換して、前回の残りとつなげる
      leftover += buffer.toString("utf8", 0, bytesRead);

      // 改行コードで分割
      const lines = leftover.split("\n");

      // 最後の要素は「改行で終わっていない行」の可能性があるため残しておく
      leftover = lines.pop();

      // 各行を yield で返す（イテレーションごとに1行ずつ）
      for (const line of lines) {
        yield line;
      }
    }

    // ファイルの終端で残りがあれば、それも1行として返す
    if (leftover.length > 0) {
      yield leftover;
    }
  } finally {
    // たとえ途中で break や throw が呼ばれても、ファイルを必ず閉じる
    if (fd !== undefined) {
      fs.closeSync(fd);
    }
  }
}
