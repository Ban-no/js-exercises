// 名前付きインポート + 名前変更
import { add as addition, subtract } from "./math.mjs";

// デフォルトインポート
import Person from "./Person.mjs";

// 再エクスポートされたものを利用
import { add } from "./utils.mjs";

console.log("2 + 3 =", addition(2, 3)); // 名前変更したadd
console.log("10 - 7 =", subtract(10, 7));
console.log("再エクスポート add(1,2) =", add(1, 2));

const alice = new Person("Alice", 25);
console.log(alice.greet());
