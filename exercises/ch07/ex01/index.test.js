import { addMatrices, multiplyMatrices } from "./index";

test("行列の加算", () => {
  const A = [
    [1, 2],
    [3, 4],
  ];
  const B = [
    [5, 6],
    [7, 8],
  ];
  expect(addMatrices(A, B)).toEqual([
    [6, 8],
    [10, 12],
  ]);
});

test("サイズが違う行列を加算しようとするとエラー", () => {
  const A = [[1, 2]];
  const B = [
    [1, 2],
    [3, 4],
  ];
  expect(() => addMatrices(A, B)).toThrow("行列のサイズが一致しません");
});

test("行列の乗算", () => {
  const A = [
    [1, 2],
    [3, 4],
  ];
  const B = [
    [2, 0],
    [1, 2],
  ];
  // 計算結果：
  // [
  //   [1*2 + 2*1, 1*0 + 2*2] = [4, 4],
  //   [3*2 + 4*1, 3*0 + 4*2] = [10, 8]
  // ]
  expect(multiplyMatrices(A, B)).toEqual([
    [4, 4],
    [10, 8],
  ]);
});

test("行列の乗算でサイズ不一致ならエラー", () => {
  const A = [[1, 2]];
  const B = [[3, 4]];
  expect(() => multiplyMatrices(A, B)).toThrow(
    "Aの列数とBの行数が一致しません"
  );
});
