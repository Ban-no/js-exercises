### $ を変数名として利用するライブラリ

- jQuery
- 慣例的にセレクタを指定する際に$('.className')のような使い方をする
- https://engineering.webstudio168.jp/2022/03/javascript-dollar-means/

### \_ を変数名として利用するライブラリ

- Underscore.js
- var x = \_.shuffle([2,8,10,3]); だと配列をシャッフル
- \_.each([2,8,6,4],function(num){ console.log(num \* 2)}); だと配列の値を 2 倍
  など
- https://www.tam-tam.co.jp/tipsnote/javascript/post3868.html?utm_source=chatgpt.com

- Lodash
- const youngUsers = \_.filter(users, user => user.age < 30); だと配列のフィルタリング
- const uniqueNumbers = \_.uniq(numbers); ユニークな配列を見つける
- https://ironpdf.com/ja/nodejs/blog/node-help/lodash-npm/
