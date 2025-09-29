- mode=none (main.none.js)

  - コードはほぼ元の形式のまま（圧縮なし・可読性あり）。returnや改行も残っている。

- mode=development (main.dev.js)

  - デフォルトで eval() が使われ、ブラウザ用にソースマップ埋め込み。可読性は低いが開発向けでデバッグしやすい。

- mode=production (main.prod.js)
  - コードが最小化され、圧縮・難読化されている。コメントも改行もほとんどなく、サイズが最も小さい。
