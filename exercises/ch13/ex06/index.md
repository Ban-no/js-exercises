## jQuery Deferred について調べ Promise との関係性について説明しなさい。

- jQuery Deferred は、非同期処理を扱うために jQuery が独自に実装した仕組み。

- Promise は ECMAScript 2015（ES6）で標準化された同様の概念。

- Deferred は jQuery 固有のメソッド（$.Deferred(), resolve(), reject(), done(), fail() など）を使う。

- Promise は標準構文（new Promise(), then(), catch(), finally()）を使う。

- jQuery 1.8 以降の Deferred は Promise/A+ 仕様に近いが、完全に一致しない。

- 現在はネイティブ Promise が主流であり、Deferred は互換性維持や旧コード対応目的で使われる。
