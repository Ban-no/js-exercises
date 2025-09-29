# 問題10.3の場合

## 関数のリファクタ（名前変更）

- math.cjs を開いて`add` の上で 右クリック → "シンボルの名前変更" を選んで`sum`に変える

【結果】

- math.cjsの中の`add`が`sum`に書き換えられる（追随する）
- index.cjsの中の`add`は`sum`に書き換えられない（インポート側は追随しない）

## クラスのリファクタ（名前変更）

- Person.cjs を開いて、`Person` の上で Rename Symbol をして `Human` に変更する

【結果】

- Person.cjs の中の`Person` が `Human` に書き換えられる（追随する）
- index.cjsの中の`Person` は `Human` に書き換えられない（インポート側は追随しない）

# 問題10.4の場合

## 関数のリファクタ（名前変更）

- math.mjs を開いて`add` の上で 右クリック → "シンボルの名前変更" を選んで`sum`に変える

【結果】

- math.mjsの中の`add`が`sum`に書き換えられる（追随する）
- index.mjsの中の`import { sum as addition, subtract } from "./math.mjs";`の`add`も`sum`に書き換えられる（追随する）

## クラスのリファクタ (デフォルトエクスポート)

- Person.cjs を開いて、`Person` の上で Rename Symbol をして `Human` に変更する

【結果】

- Person.mjs の中の`Person` が `Human` に書き換えられる（追随する）
- index.mjsの中の`Person` も `Human` に書き換えられる（追随する）

## 名前変更を伴うインポート

- index.mjs を開いて`add` の上で 右クリック → "シンボルの名前変更" を選んで`sum`に変える

【結果】

- index.mjsの中の`add`が`sum`に書き換えられる（追随する）
- math.mjsの中の`add`も`sum`に書き換えられる（追随する） ただし、インポート側の別名`addition`はそのまま。

## 再エクスポート ←ちょっと確認の仕方合っているか自信ない

- math.mjs を開いて`add` の上で 右クリック → "シンボルの名前変更" を選んで`sum`に変える

【結果】

- math.mjsの中の`add`が`sum`に書き換えられる（追随する）
- index.mjsの中の`import { add } from "./utils.mjs";`の`add`も`sum`に書き換えられる（追随する）

# まとめ

- CommonJS（10.3）

  - 定義ファイル内は追随する
  - インポート側は自動では追随しない

- ES Modules（10.4）
  - 定義ファイル内もインポート側も双方向で追随する
  - 再エクスポートや別名インポートも解析され、必要な範囲で追随
