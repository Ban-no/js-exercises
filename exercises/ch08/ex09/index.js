// withResource関数を定義
// resource: 解放が必要なオブジェクト（closeメソッドを持っている）
// callback: resourceを使って行いたい処理（関数）
export function withResource(resource, callback) {
  try {
    // コールバックを実行する
    // resourceを引数として渡す
    return callback(resource);
  } finally {
    // エラーが出ても、必ずcloseを実行する
    resource.close();
  }
}
