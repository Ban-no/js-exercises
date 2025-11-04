function wait(msec) {
  return new Promise((resolve) => setTimeout(resolve, msec));
}

function g1() {
  // thenのネストをなくす
  return wait(1000)
    .then(() => {
      console.log("A");
      return wait(2000);
    })
    .then(() => {
      console.log("B");
      return wait(3000);
    })
    .then(() => {
      console.log("C");
    });
}

function g2() {
  // new Promise を使わずに Promise チェーンで完結
  return wait(1000)
    .then(() => console.log("A"))
    .then(() => wait(2000))
    .then(() => console.log("B"))
    .then(() => wait(3000))
    .then(() => console.log("C"));
}

function g3() {
  // 変数宣言なしでチェーン内に値を渡していく
  function fetchUser() {
    return Promise.resolve({ id: 42, name: "John" });
  }
  function fetchUserFriends(user) {
    return Promise.resolve([
      { name: "Sam", id: 100 },
      { name: "Bob", id: 1 },
    ]);
  }

  return fetchUser().then((user) =>
    fetchUserFriends(user).then((friends) =>
      console.log(`${user.name} has ${friends.length} friends!`)
    )
  );
}

function g4() {
  function someFunction() {
    return 42;
  }

  // Promise.resolveを使って Promise を返す
  return Promise.resolve(someFunction());
}

/*****実行と実行結果*****/

// g1実行
//console.log("start");
//g1().then(() => console.log("done"));

/***
 * 出力
start          ← すぐ表示
(1秒後)  A
(3秒後)  B
(6秒後)  C
(6秒後)  done
 */

// g2実行
//console.log("start");
//g2().then(() => console.log("done"));

/***
 * 出力
start          ← すぐ表示
(1秒後)  A
(3秒後)  B
(6秒後)  C
(6秒後)  done
 */

// g3実行
//console.log("start");
//g3().then(() => console.log("done"));

/***
 * 出力
start          ← すぐ表示
(すぐに) John has 2 friends!
(すぐに) done
 */

// g4実行
console.log("start");
g4().then((value) => {
  console.log(`value: ${value}`);
  console.log("done");
});

/***
 * 出力
start          ← すぐ表示
(すぐに) value: 42
(すぐに) done
 */
