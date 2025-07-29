// 行列の加算
export function addMatrices(A, B) {
  // 行・列のサイズが一致するか確認
  if (A.length !== B.length || A[0].length !== B[0].length) {
    throw new Error("行列のサイズが一致しません");
  }

  // 各要素を加算して新しい行列を作る
  const result = [];
  for (let i = 0; i < A.length; i++) {
    const row = [];
    for (let j = 0; j < A[0].length; j++) {
      row.push(A[i][j] + B[i][j]);
    }
    result.push(row);
  }
  return result;
}

// 行列の乗算
export function multiplyMatrices(A, B) {
  // Aの列数とBの行数が一致するか確認
  if (A[0].length !== B.length) {
    throw new Error("Aの列数とBの行数が一致しません");
  }

  const result = [];
  for (let i = 0; i < A.length; i++) {
    const row = [];
    for (let j = 0; j < B[0].length; j++) {
      let sum = 0;
      for (let k = 0; k < A[0].length; k++) {
        sum += A[i][k] * B[k][j]; // 対応する要素の積の和
      }
      row.push(sum);
    }
    result.push(row);
  }
  return result;
}
