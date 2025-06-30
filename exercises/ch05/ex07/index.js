function f() {
  try {
    return true;
  } finally {
    return false;
  }
}

console.log(f());

//結果：false  理由：tryブロック内でreturnが実行されても、finallyブロックが実行されるため、finallyブロック内のreturnが最終的な
