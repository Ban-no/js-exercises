/********前半********/
console.log("====前半====");
const obj1 = { x: 1 };
obj1.y = 2; // 問題: ここに1行コードを書くことで以下の行で {x: 1, y: 2} が出力されること
console.log(obj1);

const obj2 = { x: 1, y: 2 };
// 問題: 以下の行では何が出力されるか、予想してから結果を確認しなさい -> false
console.log(obj1 === obj2);

/********後半********/
console.log("====後半====");
/*
// 厳密等価なら true
equals(42, 42); // true
equals(null, null); // true

// 厳密等価ではない場合オブジェクト以外が指定されれば false
equals({ x: 42 }, 42); // false
equals(null, { x: 42 }); // false

// プロパティの数・名前が一致しなければ false
equals({ x: 1 }, { y: 1 }); // false
equals({ x: 1 }, { x: 1, y: 1 }); // false

// プロパティの各値を equals で再帰的に比較
equals({ x: { y: { z: 10 } } }, { x: { y: { z: 10 } } }); // true
equals({ x: { y: { z: 10 } } }, { x: { y: { z: 10, w: 1 } } }); // false
/*

/**********************/
function equals(o1, o2) {
  if (o1 === o2) return true;
  if (
    typeof o1 !== "object" ||
    o1 === null ||
    typeof o2 !== "object" ||
    o2 === null
  )
    return false;

  const keys1 = Object.keys(o1);
  const keys2 = Object.keys(o2);
  if (keys1.length !== keys2.length) return false;

  for (let key of keys1) {
    if (!keys2.includes(key)) return false;
    if (!equals(o1[key], o2[key])) return false;
  }

  return true;
}

module.exports = { equals }; // ← Jestで使うためにエクスポート
