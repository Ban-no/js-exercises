## 問題 4.5 🖋️

以下のプログラムは 1 から 100 までの FizzBuzz を出力する。
Fizz、Buzz、FizzBuzz、数値、それぞれのケースで式がどのように評価されるか言及しつつ処理を説明しなさい。

```javascript
for (i = 1; i < 101; i++)
  console.log((i % 3 ? "" : "Fizz") + (i % 5 ? "" : "Buzz") || i);
```

**出題範囲**: 4.10

## 補足

まず、上記のままだと、i が定義されていないという ReferenceErrorが出たので、下記のように解釈した。

```javascript
for (let i = 1; i < 101; i++)
  console.log((i % 3 ? "" : "Fizz") + (i % 5 ? "" : "Buzz") || i);
```

## 解答

1. (i % 3 ? "" : "Fizz")

- 三項演算子です。

```
条件式 ? 条件がtrueのときの値 : 条件がfalseのときの値
```

- i % 3 が 0でない（つまり3の倍数でない）場合 → ""（空文字列）
- i % 3 が 0（つまり3の倍数）の場合 → "Fizz"

2. (i % 5 ? "" : "Buzz")

- 同様に、5の倍数なら "Buzz"、そうでなければ ""

3. +（文字列の結合）

- "Fizz" や "Buzz" を結合します。
- 例えば、i = 15 のとき → "Fizz" + "Buzz" → "FizzBuzz"

4. || i

- JavaScript の || は 左辺が「truthy」ならそれを返し、そうでなければ右辺を返す。
- "Fizz", "Buzz", "FizzBuzz" は truthy → そのまま出力
- ""（空文字列）は falsy → i を出力
