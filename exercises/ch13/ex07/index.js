/***そのまま張るとlog()等定義していないというエラーが出たので下記追加***/
function log(msg) {
  console.log(msg);
}
function logA() {
  log("A");
}
function logB() {
  log("B");
}
function logC() {
  log("C");
}

function wait(msec) {
  return new Promise((resolve) => setTimeout(resolve, msec));
}
function wait1() {
  return wait(1000);
}
function wait2() {
  return wait(2000);
}
function wait3() {
  return wait(3000);
}

function errX() {
  throw new Error("errX is not defined");
}
function errY() {
  throw new Error("errY is not defined");
}

/******以下は問題のそのままコピペ******/

async function h1() {
  try {
    await wait3();
    logA();
    await wait2();
    logB();
    await wait1();
    logC();
  } catch (e) {
    log(e.message);
  }
}

function h2() {
  // NOTE: h3 との比較用
  new Promise(() => {
    errX();
  }).catch((e) => log(e.message));
}

function h3() {
  // NOTE: new Promise の引数が async function の場合、例外はどう扱われるだろう
  new Promise(async () => {
    errX();
  }).catch((e) => log(e.message));
}

async function h4() {
  // NOTE: 2つの例外は両方 catch できるか？
  try {
    const p1 = wait2().then(() => {
      errX();
    });
    const p2 = wait1().then(() => {
      errY();
    });
    await p1;
    await p2;
  } catch (e) {
    log(e.message);
  }
}

/******実行用******/
//h1();
//h2();
//h3();
h4();
