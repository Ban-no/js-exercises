// ===== リトライ関数（Promise版） =====

/**
 * 指数バックオフ付きリトライ関数
 * @param {Function} func - Promise を返す関数（例: fetchなど）
 * @param {number} maxRetry - 最大リトライ回数
 * @returns {Promise<*>} - 成功時は func の結果で解決 / 失敗時は reject
 */
export async function retryWithExponentialBackoff(func, maxRetry) {
  let attempt = 0;
  while (true) {
    try {
      return await func(); // 成功したら解決
    } catch (e) {
      if (attempt >= maxRetry) throw e; // 最大回数に達したら失敗
      attempt++;
      const delay = Math.pow(2, attempt - 1) * 1000; // 1秒, 2秒, 4秒...
      console.log(
        `Retrying in ${delay / 1000} seconds... (attempt ${attempt})`
      );
      await new Promise((resolve) => setTimeout(resolve, delay));
    }
  }
}
