// obj1 を {x: 1, y: 2} に変化させるには obj1 に y:2 を追加する
const obj1 = { x: 1 };
obj1.y = 2; // ★ここが追加すべき1行
console.log(obj1); // { x: 1, y: 2 }

const obj2 = { x: 1, y: 2 };
console.log(obj1 === obj2); // false（参照が違う）

// equals関数：2つの値またはオブジェクトが等価かどうかをチェックする
export function equals(o1, o2) {
  // 1. 厳密等価であれば true
  if (o1 === o2) return true;

  // 2. null やオブジェクト以外があれば false
  if (
    typeof o1 !== "object" ||
    o1 === null ||
    typeof o2 !== "object" ||
    o2 === null
  ) {
    return false;
  }

  // 3. プロパティ数・名前の一致確認
  const keys1 = Object.keys(o1);
  const keys2 = Object.keys(o2);
  if (keys1.length !== keys2.length) return false;
  if (!keys1.every((k) => keys2.includes(k))) return false;

  // 4. 各値を再帰的に比較
  return keys1.every((k) => equals(o1[k], o2[k]));
}
