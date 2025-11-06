/**
 * イテレータ関数
 */
function counterIter(max) {
  console.log("counterIter");
  let c = 1;
  return {
    [Symbol.iterator]() {
      console.log("counterIter: Symbol.iterator");
      return this;
    },
    next() {
      console.log("counterIter: next");
      if (c >= max + 1) {
        return { value: undefined, done: true };
      }
      const value = c;
      c++;
      return { value, done: false };
    },
    return(value) {
      console.log("counterIter: return:", value);
      return { value, done: true };
    },
    throw(e) {
      console.log("counterIter: throw:", e);
      throw e;
    },
  };
}

/**
 * ジェネレータ関数
 */
function* counterGen(max) {
  console.log("counterGen");
  try {
    for (let c = 1; c <= max; c++) {
      console.log("counterGen: next");
      yield c;
    }
  } catch (e) {
    console.log("counterGen: catch:", e);
    throw e;
  } finally {
    console.log("counterGen: finally");
  }
}

// ========================================================
// 調査 1: next() を明示的に呼び出す
// ========================================================
console.log("\n--- [1] next() 明示呼び出し ---");
const iter1 = counterIter(3);
const gen1 = counterGen(3);

console.log(iter1.next());
console.log(iter1.next());
console.log(iter1.next());
console.log(iter1.next()); // done: true になる

console.log(gen1.next());
console.log(gen1.next());
console.log(gen1.next());
console.log(gen1.next()); // done: true になる

// ========================================================
// 調査 2: return() を明示的に呼び出す
// ========================================================
console.log("\n--- [2] return() 明示呼び出し ---");
const iter2 = counterIter(3);
const gen2 = counterGen(3);

console.log(iter2.next());
console.log(iter2.return("STOP"));

console.log(gen2.next());
console.log(gen2.return("STOP"));

// ========================================================
// 調査 3: throw() を明示的に呼び出す
// ========================================================
console.log("\n--- [3] throw() 明示呼び出し ---");
const iter3 = counterIter(3);
const gen3 = counterGen(3);

try {
  console.log(iter3.next());
  iter3.throw("iter error!");
} catch (e) {
  console.log("iter3 でキャッチ:", e);
}

try {
  console.log(gen3.next());
  gen3.throw("gen error!");
} catch (e) {
  console.log("gen3 でキャッチ:", e);
}

// ========================================================
// 調査 4: for-of ループを実行
// ========================================================
console.log("\n--- [4] for-of ループ ---");
for (const v of counterIter(3)) {
  console.log("for-of iter 値:", v);
}
for (const v of counterGen(3)) {
  console.log("for-of gen 値:", v);
}

// ========================================================
// 調査 5: for-of ループ途中で break
// ========================================================
console.log("\n--- [5] for-of 途中 break ---");
for (const v of counterIter(3)) {
  console.log("for-of iter 値:", v);
  if (v === 2) break;
}
for (const v of counterGen(3)) {
  console.log("for-of gen 値:", v);
  if (v === 2) break;
}

// ========================================================
// 調査 6: for-of ループ中に例外発生
// ========================================================
console.log("\n--- [6] for-of 中に例外発生 ---");
try {
  for (const v of counterIter(3)) {
    console.log("for-of iter 値:", v);
    if (v === 2) throw new Error("iter 例外!");
  }
} catch (e) {
  console.log("iter 側でキャッチ:", e.message);
}

try {
  for (const v of counterGen(3)) {
    console.log("for-of gen 値:", v);
    if (v === 2) throw new Error("gen 例外!");
  }
} catch (e) {
  console.log("gen 側でキャッチ:", e.message);
}
