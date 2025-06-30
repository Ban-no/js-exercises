//以下のプログラムは 1 から 100 までの FizzBuzz を出力する。
//Fizz、Buzz、FizzBuzz、数値、それぞれのケースで式がどのように評価されるか言及しつつ処理を説明しなさい。
//for (i = 1; i < 101; i++)
//  console.log((i % 3 ? "" : "Fizz") + (i % 5 ? "" : "Buzz") || i);

for (let i = 1; i < 101; i++)
  console.log((i % 3 ? "" : "Fizz") + (i % 5 ? "" : "Buzz") || i);
