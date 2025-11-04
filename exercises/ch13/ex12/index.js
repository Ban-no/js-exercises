// setTimeout の例: 1秒後に "Hello, world!" を出力
setTimeout(() => console.log("Hello, world!"), 1000);

// longA: 無限ループで "A" を出力する関数
async function longA() {
  let count = 0;
  while (true) {
    if (++count % 1000 === 0) {
      console.log("A");
    }
    // await して Promise を解決するだけ
    // これにより処理がマイクロタスクとして扱われる
    await Promise.resolve({});
  }
}

// longB: 無限ループで "B" を出力する関数
async function longB() {
  let count = 0;
  while (true) {
    if (++count % 1000 === 0) {
      console.log("B");
    }
    // 同じくマイクロタスクに渡す
    await Promise.resolve({});
  }
}

// 両方の関数を呼び出す
longA();
longB();

// 実行イメージ:
// - "A" と "B" が交互にコンソールに出力される
// - setTimeout は後回しになり、"Hello, world!" は表示されるのが遅くなる
