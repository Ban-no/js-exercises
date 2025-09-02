## 解答 8.4

### 実行結果の予想と説明

1. **`nest.nm()` の呼び出し**

   - `nm` は通常の関数として `nest` オブジェクトのメソッドになっている。
   - メソッド呼び出しでは `this` が呼び出し元のオブジェクト (`nest`) を指す。
   - よって `this === obj` は `false`、`this === nest` は `true`。
   - 出力: `false true`

2. **`nest.arrow()` の呼び出し**

   - `arrow` はアロー関数なので、自分自身で `this` を束縛しない。
   - アロー関数内の `this` は定義時のスコープの `this` を参照する。
   - このアロー関数は `obj.om` 実行中に定義されたので、外側の `this` は `obj`。
   - よって `this === obj` は `true`、`this === nest` は `false`。
   - 出力: `true false`

### 実行結果

```
false true
true false
```

### まとめ

- 通常の関数は「呼び出し方」で `this` が決まる。
- アロー関数は「定義時のスコープの this」を閉じ込める。
