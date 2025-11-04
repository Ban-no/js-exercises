// ===== 共通ユーティリティ関数 =====

// 指定ミリ秒後に解決される Promise を返す
function wait(msec) {
  return new Promise((resolve) => setTimeout(resolve, msec));
}

// 0, 1, 2, 3 秒待つ関数
const wait0 = () => wait(0);
const wait1 = () => wait(1000);
const wait2 = () => wait(2000);
const wait3 = () => wait(3000);

// ログ出力関数
const log = (v) => console.log(v);
const logA = () => console.log("A");
const logB = () => console.log("B");
const logC = () => console.log("C");

// 例外を発生させる関数
const errX = () => {
  throw new Error("X");
};
const errY = () => {
  throw new Error("Y");
};

// ===== 問題 13.9 =====

async function i1() {
  // NOTE: any で1つ Promise が解決された時に他の Promise はどうなるだろうか
  let v = 0;

  v = await Promise.any([
    wait1().then(() => 42),
    wait2()
      .then(() => (v = 100))
      .then(() => 0),
  ]);

  log(v);
  await wait2();
  log(v);
}

async function i2() {
  const v = await Promise.all([
    wait3().then(() => {
      logA();
      return "A";
    }),
    wait2().then(() => {
      logB();
      return "B";
    }),
    wait1().then(() => {
      logC();
      return "C";
    }),
  ]);
  log(v);
}

async function i3() {
  // NOTE: all で引数の1つが失敗すると他の Promise はどうなるだろうか
  let v = 42;
  try {
    await Promise.all([
      wait3().then(() => {
        v = 0;
        errX();
      }),
      wait2().then(() => {
        logB();
        return "B";
      }),
      wait1().then(() => {
        errY();
      }),
    ]);
  } catch (e) {
    log(e.message);
    log(v);
    await wait3();
    log(v);
  }
}

/*async function i4() {
  // NOTE: 複数の非同期処理が1つの変数に対し書き込みを行う場合、読み込みと書き込みの間に await が入るとどうなるだろうか
  let v = 0;

  const p1 = async () => {
    await wait1();
    for (let i = 0; i < 5; i++) {
      const next = v + 1;
      await wait2();
      v = next;
    }
  };

  const p2 = async () => {
    for (let i = 0; i < 5; i++) {
      const next = v + 1;
      await wait2();
      v = next;
    }
  };

  await Promise.all([p1(), p2()]);
  log(v);
}*/

// 出力が10になるように修正
async function i4() {
  let v = 0;

  // p1, p2 が順番に動くように設計する
  const p1 = async () => {
    await wait1();
    for (let i = 0; i < 5; i++) {
      const next = v + 1;
      await wait2();
      v = next;
    }
  };

  const p2 = async () => {
    for (let i = 0; i < 5; i++) {
      const next = v + 1;
      await wait2();
      v = next;
    }
  };

  // await Promise.all([p1(), p2()]); だと競合するので順番に待つ
  await p1();
  await p2();

  log(v); // 10 が出力される　(もとのコードだと 5 になる)
}

// ===== 実行部分 =====

// i1();
// i2();
i3();
// i4();
