export function f(body) {
  const argNames = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];

  // $1〜$10 を a〜j に置き換える
  for (let i = 10; i >= 1; i--) {
    body = body.replaceAll(`$${i}`, argNames[i - 1]);
  }

  // 関数本体の形式を確認
  const isBlock = body.trim().startsWith("{");
  const functionBody = isBlock ? body : `return ${body};`;

  // 使用されている引数を抽出
  const usedArgs = argNames.filter((name) => functionBody.includes(name));

  // 関数を生成
  return new Function(...usedArgs, functionBody);
}
