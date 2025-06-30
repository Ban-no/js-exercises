// 何らかのリサイズを行う関数と思って読んで下さい
//
// - params には undefined またはオブジェクトが与えられる
// - params.maxWidth が与えられる場合 (正の整数と仮定して良い) はその値を利用する
// - params.maxHeight が与えられる場合 (正の整数と仮定して良い) はその値を利用する

// 問題の元の関数
function resize(params) {
  let maxWidth = 600; // 最大横幅のデフォルト値を設定
  let maxHeight = 480; // 最大高さのデフォルト値を設定

  if (params && params.maxWidth) {
    // params が存在し、maxWidth が指定されている場合
    maxWidth = params.maxWidth; // maxWidth を更新
  }

  if (params && params.maxHeight) {
    // params が存在し、maxHeight が指定されている場合
    maxHeight = params.maxHeight; // maxHeight を更新
  }

  console.log({ maxWidth, maxHeight }); // 結果をオブジェクトとして出力
}
console.log("=== resize ===");
resize({ maxWidth: 60, maxHeight: 48 }); // { maxWidth: 60, maxHeight: 48 } を出力
resize({ maxWidth: 1000 }); // { maxWidth: 1000, maxHeight: 480 } を出力
resize({ maxHeight: 720 }); // { maxWidth: 600, maxHeight: 720 } を出力

// `if` を利用せず `&&` や `||` を用いて `maxWidth` や `maxHeight` を設定する関数 (`resize1`)
function resize1(params) {
  let maxWidth = (params && params.maxWidth) || 600;
  let maxHeight = (params && params.maxHeight) || 480;

  console.log({ maxWidth, maxHeight });
}
console.log("=== resize1 ===");
resize1({ maxWidth: 60, maxHeight: 48 }); // { maxWidth: 60, maxHeight: 48 } を出力
resize1({ maxWidth: 1000 }); // { maxWidth: 1000, maxHeight: 480 } を出力
resize1({ maxHeight: 720 }); // { maxWidth: 600, maxHeight: 720 } を出力

// `if` を利用せず `?.` や `??` を用いて `maxWidth` や `maxHeight` を設定する関数 (`resize2`)
function resize2(params) {
  let maxWidth = params?.maxWidth ?? 600;
  let maxHeight = params?.maxHeight ?? 480;

  console.log({ maxWidth, maxHeight });
}
console.log("=== resize2 ===");
resize2({ maxWidth: 60, maxHeight: 48 }); // { maxWidth: 60, maxHeight: 48 } を出力
resize2({ maxWidth: 1000 }); // { maxWidth: 1000, maxHeight: 480 } を出力
resize2({ maxHeight: 720 }); // { maxWidth: 600, maxHeight: 720 } を出力
