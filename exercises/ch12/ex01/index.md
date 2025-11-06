## 実行結果

node .\ch12\ex01\index.js

## 1.明示的にイテレータプロトコルの next() を呼び出す

- イテレータ
  - counterIter → Symbol.iterator → next の順で出力。自前で next() が動作する。
- ジェネレータ
  - counterGen → next が繰り返され、yield に到達するたびに一時停止。

-> next() を呼ぶたびに次の値を生成。done: true になると終了。

```
--- [1] next() 明示呼び出し ---
counterIter
counterIter: next
{ value: 1, done: false }
counterIter: next
{ value: 2, done: false }
counterIter: next
{ value: 3, done: false }
counterIter: next
{ value: undefined, done: true }
counterGen
counterGen: next
{ value: 1, done: false }
counterGen: next
{ value: 2, done: false }
counterGen: next
{ value: 3, done: false }
counterGen: finally
{ value: undefined, done: true }
```

## 2.明示的にイテレータプロトコルの return() を呼び出す

- イテレータ
  - return メソッドが呼ばれるだけ（finallyはなし）
- ジェネレータ
  - finally ブロックが必ず実行される。終了処理が可能。

-> return() は「このイテレーションを終了したい」という合図。ジェネレータではクリーンアップ（finally）が実行される。

```
--- [2] return() 明示呼び出し ---
counterIter
counterIter: next
{ value: 1, done: false }
counterIter: return: STOP
{ value: 'STOP', done: true }
counterGen
counterGen: next
{ value: 1, done: false }
counterGen: finally
{ value: 'STOP', done: true }
```

## 3.明示的にイテレータプロトコルの throw() を呼び出す

- イテレータ
  - throw() 内で例外を再スロー → 外側で catch される
- ジェネレータ
  - catch ブロックが実行 → finally も実行される

-> throw() は「イテレーション中にエラーが発生した」ことを伝える手段。

```
--- [3] throw() 明示呼び出し ---
counterIter
counterIter: next
{ value: 1, done: false }
counterIter: throw: iter error!
iter3 でキャッチ: iter error!
counterGen
counterGen: next
{ value: 1, done: false }
counterGen: catch: gen error!
counterGen: finally
gen3 でキャッチ: gen error!
```

## 4.for-of ループを実行

- イテレータ
  - Symbol.iterator が呼ばれ、next() が自動で繰り返される
- ジェネレータ
  - 同様に自動実行。yield が１つずつ進む

-> for-of ループはイテレータプロトコルを自動で使っている。

```
--- [4] for-of ループ ---
counterIter
counterIter: Symbol.iterator
counterIter: next
for-of iter 値: 1
counterIter: next
for-of iter 値: 2
counterIter: next
for-of iter 値: 3
counterIter: next
counterGen
counterGen: next
for-of gen 値: 1
counterGen: next
for-of gen 値: 2
counterGen: next
for-of gen 値: 3
counterGen: finally
```

## 5.for-of ループを実行途中で break

- イテレータ
  - return() は自動的に呼ばれない
- ジェネレータ
  - finally が自動的に実行される（内部的に return() が呼ばれる）

-> ジェネレータはループ途中で終了しても安全にクリーンアップできる。

```
--- [5] for-of 途中 break ---
counterIter
counterIter: Symbol.iterator
counterIter: next
for-of iter 値: 1
counterIter: next
for-of iter 値: 2
counterIter: return: undefined
counterGen
counterGen: next
for-of gen 値: 1
counterGen: next
for-of gen 値: 2
counterGen: finally
```

## 6.for-of ループを実行中に例外発生

- イテレータ
  - 例外が外に投げられるだけ
- ジェネレータ
  - finally が実行されてから例外が外に出る

-> ジェネレータは「エラーが起きても後処理できる」点が便利。

```
--- [6] for-of 中に例外発生 ---
counterIter
counterIter: Symbol.iterator
counterIter: next
for-of iter 値: 1
counterIter: next
for-of iter 値: 2
counterIter: return: undefined
iter 側でキャッチ: iter 例外!
counterGen
counterGen: next
for-of gen 値: 1
counterGen: next
for-of gen 値: 2
counterGen: finally
gen 側でキャッチ: gen 例外!

```
