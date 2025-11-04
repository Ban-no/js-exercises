## h1

### 出力

A  
B  
C

### 理由

await により各 wait が順に完了してから次の処理が進む。
`async` 関数内で `await` により順番に処理が待たれるため、  
`wait3 → logA → wait2 → logB → wait1 → logC` の順で実行される。  
例外は発生しないため、`catch` は動作しない。

## h2

### 出力

errX is not defined

### 理由

`new Promise(() => { errX(); })` の中で例外が発生しても、  
Promise の **executor 関数内の同期的な例外** は `.catch()` では捕まえられない。  
そのため `log(e.message)` は呼ばれない。

## h3

### 出力

下記エラー発生

throw new Error("errX is not defined");

### 理由

`new Promise(async () => { errX(); })` では executor が `async` 関数であり、  
内部で発生した例外は `reject` として扱われるが、  
Promise コンストラクタは executor が返す Promise を待たない仕様のため、  
`.catch()` に届かず **Node.js が未処理例外として報告**する。

## h4

### 出力

下記エラー発生

throw new Error("errY is not defined");

### 理由

`p1` と `p2` が同時に開始され、  
`wait1()` が先に終了して `errY()` が発生する。  
この時、`await p1;` の行ではまだ `p2` の reject を処理できないため、  
Node.js が「未処理の Promise 拒否」として報告する。  
結果として最初のエラー（errY）だけが表示される。
