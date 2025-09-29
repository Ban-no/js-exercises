// JavaScript 例: スタックで括弧対応を確認
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
