import { jest } from "@jest/globals"; // ← これを追加
import { retryWithExponentialBackoff } from "./index.js";

jest.setTimeout(15000); // タイムアウトを15秒に延長

// モック関数
function createMockFunc({ failCount, resolveValue }) {
  let count = 0;
  return jest.fn(() => {
    if (count < failCount) {
      count++;
      return Promise.reject(new Error("fail"));
    } else {
      return Promise.resolve(resolveValue);
    }
  });
}

describe("retryWithExponentialBackoff", () => {
  test("成功するまでリトライして値を返す", async () => {
    const mockFunc = createMockFunc({ failCount: 2, resolveValue: "OK" });
    const result = await retryWithExponentialBackoff(mockFunc, 5);
    expect(result).toBe("OK");
    expect(mockFunc).toHaveBeenCalledTimes(3);
  });

  test("最大リトライ回数に達したらエラーを投げる", async () => {
    const mockFunc = createMockFunc({ failCount: 5, resolveValue: "NG" });
    await expect(retryWithExponentialBackoff(mockFunc, 3)).rejects.toThrow(
      "fail"
    );
    expect(mockFunc).toHaveBeenCalledTimes(4);
  });
});
