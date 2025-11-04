// index.js
// 実行コマンド例: node index.js
// Promise と非同期処理の挙動確認（第13章）

// ------------------------------------
// 共通ユーティリティ関数
// ------------------------------------

// 指定時間後に解決される Promise
function wait(msec) {
  return new Promise((resolve) => setTimeout(resolve, msec));
}

// wait の短縮版
const wait0 = () => wait(0);
const wait1 = () => wait(1000);
const wait2 = () => wait(2000);
const wait3 = () => wait(3000);

// ログ関数
const log = (v) => console.log(v);
const logA = () => console.log("A");
const logB = () => console.log("B");
const logC = () => console.log("C");

// エラーを発生させる関数
const errX = () => {
  throw new Error("X");
};
const errY = () => {
  throw new Error("Y");
};

// ------------------------------------
// f1～f12 の定義
// ------------------------------------

function f1() {
  console.log("=== f1 ===");
  wait3()
    .then(logA)
    .then(() => wait2().then(logB))
    .then(() => wait1().then(logC));
}

function f2() {
  console.log("=== f2 ===");
  wait3()
    .then(logA)
    .then(() => {
      wait2().then(logB); // return がない（典型的なミス）
    })
    .then(() => wait1().then(logC));
}

function f3() {
  console.log("=== f3 ===");
  try {
    wait0().then(logA).then(errX);
  } catch (e) {
    logB(); // ここは呼ばれない
  } finally {
    logC(); // これは同期的にすぐ呼ばれる
  }
}

function f4() {
  console.log("=== f4 ===");
  wait2()
    .then(() => {
      logA();
      return 40;
    })
    .then((value) =>
      wait(1000).then(() => {
        logB();
        return 100;
      })
    )
    .then((v) => log(v));
}

function f5() {
  console.log("=== f5 ===");
  wait2()
    .then(() => {
      logA();
      return 40;
    })
    // 間違いパターン：then の引数が Promise そのもの
    .then(
      wait1().then(() => {
        logB();
        return 100;
      })
    )
    .then((v) => log(v));
}

function f6() {
  console.log("=== f6 ===");
  const p = wait1().then(logA);
  p.then(() => wait1()).then(logB);
  p.then(() => wait2()).then(logC);
}

function f7() {
  console.log("=== f7 ===");
  const p = wait1().then(logA);
  wait2()
    .then(() => {
      return p.then(logB);
    })
    .then(logC);
}

function f8() {
  console.log("=== f8 ===");
  wait1()
    .then(errX)
    .then(errY)
    .catch((e) => log(e.message))
    .finally(logA);
}

function f9() {
  console.log("=== f9 ===");
  wait1()
    .then(() => 42)
    .then(errY)
    .catch((e) => log(e.message))
    .finally(logA);
}

function f10() {
  console.log("=== f10 ===");
  wait1()
    .then(() => 42)
    .then(errY, (e) => log(e.message))
    .finally(logA);
}

function f11() {
  console.log("=== f11 ===");
  new Promise((resolve, reject) => {
    errX(); // throw されるが、Promise 内なので catch に伝わる
  }).catch((e) => log(e.message));
}

function f12() {
  console.log("=== f12 ===");
  new Promise((resolve, reject) => {
    setTimeout(() => errX(), 0); // setTimeout の中は Promise 外なので catch されない
  }).catch((e) => log(e.message));
}

// ------------------------------------
// 実行ブロック
// ------------------------------------

// 順に呼び出して出力が混ざらないように少し待つ
async function runAll() {
  for (const f of [f1, f2, f3, f4, f5, f6, f7, f8, f9, f10, f11, f12]) {
    f();
    await wait(10000); // 10秒待ってから次へ（長めに取って安全に）
    console.log("\n");
  }
  console.log("=== All Done ===");
}

//runAll();
f12();
