import { jest } from "@jest/globals";

test("obj.sum を JSON.stringify して mock を呼び出す", () => {
  const mock = jest.fn();

  const obj = {
    x: 0,
    y: 0,
    sum() {
      mock();
      return this.x + this.y;
    },
  };
  // ここに１行のコードを書く
  Object.defineProperty(obj, "sum", {
    enumerable: true, // JSON.stringify() に含めるため
    get() {
      mock(); // mock関数を呼び出す
      return obj.x + obj.y; // 現在の x, y の合計を返す
    },
  });

  obj.x = 1;
  obj.y = 2;
  expect(JSON.stringify(obj)).toBe(`{"x":1,"y":2,"sum":3}`);
  expect(mock).toHaveBeenCalled();
});
