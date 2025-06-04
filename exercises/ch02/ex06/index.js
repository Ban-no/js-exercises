//改行なしで！「FizzBuzz 問題の結果を文字列として返す関数を 1 行で書きなさい。」
export function fizzbuzz() {let result = []; for (let i = 1; i <= 100; i++) {if (i % 15 === 0) {result.push("FizzBuzz");} else if (i % 3 === 0) {result.push("Fizz");} else if (i % 5 === 0) {result.push("Buzz");} else {result.push(i);}} return result.join("\n") + "\n";}
  