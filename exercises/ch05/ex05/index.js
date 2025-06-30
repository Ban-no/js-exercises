// 数値プロパティを持つオブジェクトを受け取り、偶数の値だけを持つ新しいオブジェクトを返す

export function filterEvenValues(originalObj) {
  // 新しいオブジェクトを用意（これに偶数だけ追加していく）
  const resultObj = {};

  // for...in文で、オブジェクトのプロパティ名（キー）を1つずつ取り出す
  for (const key in originalObj) {
    const value = originalObj[key];

    // 値が偶数だったら、resultObjにコピーする
    if (typeof value === "number" && value % 2 === 0) {
      resultObj[key] = value;
    }
  }

  return resultObj; // 偶数だけを残した新しいオブジェクト
}
