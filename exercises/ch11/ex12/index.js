// 独自エラークラスを作る
// Error クラスを継承することで、通常のエラーと同じように使える
class FileSizeError extends Error {
  // コンストラクタはエラーを作るときに呼ばれる特別な関数
  // message: エラーメッセージ、filePath: 対象ファイル名、size: ファイルサイズ、maxSize: 許容上限
  constructor(message, filePath, size, maxSize) {
    // 親クラス(Error)のコンストラクタを呼び出してメッセージを設定
    super(message);
    this.name = "FileSizeError"; // エラー名を設定
    this.filePath = filePath; // ファイルパスを保持
    this.size = size; // ファイルサイズを保持
    this.maxSize = maxSize; // 許容上限を保持
  }
}

// ファイルサイズをチェックする関数
// filePath: ファイルパス, size: ファイルサイズ, maxSize: 許容上限
function checkFileSize(filePath, size, maxSize) {
  // ファイルサイズが許容上限を超えている場合
  if (size > maxSize) {
    // FileSizeError を投げる（throw）ことで処理を止めることができる
    throw new FileSizeError(
      `ファイル "${filePath}" はサイズ ${size} バイトで、許容上限 ${maxSize} バイトを超えています。`,
      filePath,
      size,
      maxSize
    );
  }
  // 問題なければそのまま処理を続ける
  console.log(`ファイル "${filePath}" は許容サイズ内です。`);
}

// --- 実行例 ---
const filePath = "sample.txt"; // チェックしたいファイル名
const fileSize = 5 * 1024 * 1024; // ファイルサイズ（5MB）
const maxAllowedSize = 2 * 1024 * 1024; // 許容サイズ（2MB）

try {
  // ファイルサイズチェック
  checkFileSize(filePath, fileSize, maxAllowedSize);
} catch (err) {
  // エラーが投げられた場合の処理
  if (err instanceof FileSizeError) {
    // 独自エラーの場合のメッセージを表示
    console.error("独自エラー発生:", err.message);
  } else {
    // その他のエラーの場合
    console.error("予期せぬエラー:", err);
  }
}
