# 問題10.6

## 予想

- logger.js が実行されました
- first.js が実行されました
- logger.js が実行されました
- second.js が実行されました
- index.js が実行されました

## 実行結果

- logger.js が実行されました
- first.js が実行されました
- second.js が実行されました
- index.js が実行されました

-> logger.jsは1回目のみ実行される。

-> `import`はそのファイルを一度だけ実行してキャッシュする仕組みで、複数回importしても、同じファイルは２回目以降読み込まれない
