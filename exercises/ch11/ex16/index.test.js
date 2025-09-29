// index.test.js
import { jest } from "@jest/globals";
import { retryWithExponentialBackoff } from "./index.js";

jest.useFakeTimers();

describe("retryWithExponentialBackoff", () => {
  test("func が true を返したら即座に callback が呼ばれる", () => {
    const func = jest.fn(() => true);
    const callback = jest.fn();

    retryWithExponentialBackoff(func, 3, callback);

    // 全タイマーを実行
    jest.runAllTimers();

    expect(func).toHaveBeenCalledTimes(1);
    expect(callback).toHaveBeenCalledWith(true);
  });

  test("func が false を返すと指数バックオフでリトライされる", () => {
    const func = jest
      .fn()
      .mockReturnValueOnce(false)
      .mockReturnValueOnce(false)
      .mockReturnValueOnce(true);
    const callback = jest.fn();

    retryWithExponentialBackoff(func, 5, callback);

    // 1回目: 0秒後
    jest.advanceTimersByTime(0);
    expect(func).toHaveBeenCalledTimes(1);
    expect(callback).not.toHaveBeenCalled();

    // 2回目: 1秒後
    jest.advanceTimersByTime(1000);
    expect(func).toHaveBeenCalledTimes(2);
    expect(callback).not.toHaveBeenCalled();

    // 3回目: 2秒後
    jest.advanceTimersByTime(2000);
    expect(func).toHaveBeenCalledTimes(3);
    expect(callback).toHaveBeenCalledWith(true);
  });

  test("最大リトライ回数に達して失敗した場合 callback が false で呼ばれる", () => {
    const func = jest.fn(() => false);
    const callback = jest.fn();

    retryWithExponentialBackoff(func, 3, callback);

    // 0秒後
    jest.advanceTimersByTime(0);
    // 1秒後
    jest.advanceTimersByTime(1000);
    // 2秒後
    jest.advanceTimersByTime(2000);
    // 4秒後
    jest.advanceTimersByTime(4000);

    expect(func).toHaveBeenCalledTimes(4);
    expect(callback).toHaveBeenCalledWith(false);
  });
});
