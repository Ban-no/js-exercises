// index.js
export function retryWithExponentialBackoff(func, maxRetry, callback) {
  let attempt = 0;

  // 内部で非同期処理を呼び出す関数
  const tryFunc = () => {
    const result = func();
    if (result) {
      callback(true); // 成功
    } else if (attempt < maxRetry) {
      const delay = Math.pow(2, attempt) * 1000; // 1秒, 2秒, 4秒...
      attempt++;
      setTimeout(tryFunc, delay);
    } else {
      callback(false); // 最大リトライ回数に達して失敗
    }
  };

  // 最初の呼び出しは即座に非同期で実行
  setTimeout(tryFunc, 0);
}
