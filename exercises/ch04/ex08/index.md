### `void 0` が使われていた理由と現在使わない理由

- **昔（ES5以前）**  
  `undefined` はグローバル変数として書き換え可能だったため、  
  確実に「未定義」を返す `void 0` が安全な書き方とされていた。

- **現在（ES5以降）**  
  `undefined` は書き換え不可になり、厳格モードやLintで安全が保証される。  
  そのため、可読性の高い `undefined` を使うのが主流。

### 参考資料

- 104ページ
- 【JavaScript】「とりあえず」でjavascript:void(0)を使うな！！
  - https://qiita.com/ActiveTK5929/items/e6a42f2d1591503cdc16?utm_source=chatgpt.com
- JavaScriptで`undefined`の代わりに、`void 0`を使ったほうがいい理由
  - https://liginc.co.jp/web/js/38494?utm_source=chatgpt.com
