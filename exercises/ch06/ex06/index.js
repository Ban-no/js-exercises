// assign 関数を作成（Object.assignと同じ動作）
export function assign(target, ...sources) {
  // sources の各オブジェクトについて処理
  for (const source of sources) {
    // source が null または undefined の場合はスキップ
    if (source == null) continue;

    // source のプロパティをひとつずつ取り出す
    for (const key in source) {
      // prototype のプロパティは除外する
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  // 最終的に変更された target を返す
  return target;
}
