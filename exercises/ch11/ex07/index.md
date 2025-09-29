## 正規表現で任意深さを判定できるか？

- 結論: 正規表現では任意の深さの入れ子に対応できない。

- 理由: 括弧の対応は 文脈自由文法 (CFG) で表現されるが、正規表現は 有限オートマトン でしか表現できないため、無限の入れ子に対応できない。

- 制限付き（深さを固定） であれば正規表現で判定可能。

## 限定的な正規表現例（最大深さ 3）

`^(\(\)|\(\(\)|\(\(\(\)\)\)|\(\(\(\(\)\)\)\))*$`

- 最大3階層の入れ子まで判定可能。

- それ以上の深さには対応できず、深くなるとパターンが指数的に増えるため現実的ではない。

## 実用的な解法: スタック

```js
function isBalancedParentheses(str) {
  let stack = [];
  for (const ch of str) {
    if (ch === "(") stack.push(ch);
    else if (ch === ")") {
      if (stack.length === 0) return false;
      stack.pop();
    }
  }
  return stack.length === 0;
}

console.log(isBalancedParentheses("(()(()))")); // true
console.log(isBalancedParentheses("((())")); // false
```

- 左括弧 ( をスタックに積み、右括弧 ) で取り出す方式。

- 最終的にスタックが空であれば括弧対応あり、空でなければ対応なし。

- 任意の長さ・深さに対応可能で現実的な方法。
