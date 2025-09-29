/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./ch10/ex01/index.cjs":
/*!*****************************!*\
  !*** ./ch10/ex01/index.cjs ***!
  \*****************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("{// 必要なモジュールへの参照を取得する。\nconst stats = __webpack_require__(/*! ./stats.cjs */ \"./ch10/ex01/stats.cjs\");\nconst bitSet = (__webpack_require__(/*! ./sets.cjs */ \"./ch10/ex01/sets.cjs\").Bitset);\n\n// モジュールを使ってコードを記述する\nlet s = new BitSet(100);\ns.insert(10);\ns.insert(20);\ns.insert(30);\nlet average = stats.mean([...s]); // average は 20\n\n\n//# sourceURL=webpack://preset-js/./ch10/ex01/index.cjs?\n}");

/***/ }),

/***/ "./ch10/ex01/sets.cjs":
/*!****************************!*\
  !*** ./ch10/ex01/sets.cjs ***!
  \****************************/
/***/ (() => {

eval("{//p266-271 Sets.js\n/**\n * AbstractSetクラスでは、has()抽象メソッドのみを定義する\n */\nclass AbstractSet {\n  //このメソッドではエラーをスローする。このようにすることで、\n  //サブクラスでこのメソッドを定義しなければならないようにする。\n  has(x) {\n    throw new Error(\"Abstract method\");\n  }\n}\n\n/**\n * NotSetはAbstractSetの具象サブクラス。\n * このセットは、あるほかのセットのメンバーではない値すべてがメンバーとなる。\n * このセットは、ほかのセットの状態によって定義されるセットなので、書き込む\n * ことはできない。また、メンバーは無限に存在するので、列挙もできない。\n * このセットを使ってできることは、メンバーに含まれるかどうかを調べること、\n * 数学的な表現方法を使って文字列に変換することだけ。\n */\nclass NotSet extends AbstractSet {\n  constructor(set) {\n    super();\n    this.set = set;\n  }\n\n  // 継承した抽象メソッドに対する実装。\n  has(x) {\n    return !this.set.has(x);\n  }\n  // また、ObjectのtoString()メソッドもオーバーライドする。\n  toString() {\n    return `{ x | x ∉ ${this.set.toString()} }`;\n  }\n}\n\n/**\n * RangeSetは、AbstractSetの具象サブクラス。このセットは、\n * fromからtoまで（formとtoも含む）のすべての値がメンバーとなる。\n * メンバーは浮動小数点値になりうるので、列挙できない。\n * また、意味のある大きさも持たない。\n */\nclass RangeSet extends AbstractSet {\n  constructor(from, to) {\n    super();\n    this.from = from;\n    this.to = to;\n  }\n  has(x) {\n    return this.from <= x && x <= this.to;\n  }\n  toString() {\n    return `{ x | ${this.from} <= x <= ${this.to} }`;\n  }\n}\n\n/**\n * AbstractEnumerableSetは、AbstractSetのサブクラス。\n * セットの大きさを返す抽象ゲッターメソッドと、抽象イテレータを定義する。\n * また、この２つの抽象メソッドを使って、isEmpty()、toString()、\n * equals()メソッドを実装する。サブクラスでは、イテレータと\n * 大きさを返すゲッターメソッド、has()メソッドを実装するだけで、\n * この３つのメソッドも使えるようになる。\n */\n\nclass AbstractEnumerableSet extends AbstractSet {\n  get size() {\n    throw new Error(\"Abstract method\");\n  }\n  [Symbol.iterator]() {\n    throw new Error(\"Abstract method\");\n  }\n\n  isEmpty() {\n    return this.size === 0;\n  }\n  toString() {\n    return `{${Array.from(this).join(\", \")}}`;\n  }\n  equals(set) {\n    // 比較対象のセットがAbstractEnumerableSetでなければ、等しくない。\n    if (!(set instanceof AbstractEnumerableSet)) return false;\n\n    //大きさが同じでなければ、等しくない。\n    if (this.size !== set.size) return false;\n\n    //このセットの要素を巡回する。\n    for (let element of this) {\n      //要素が比較対象のセットのメンバーでなければ、等しくない。\n      if (!set.has(element)) return false;\n    }\n\n    //要素が一致したので、２つのセットは等しい。\n    return true;\n  }\n}\n\n/**\n * SingletonSetは、AbstractEnumerableSetの具象サブクラス。\n * シングルトンセットは、メンバーが１つしかない読み出し専用のセット。\n */\nclass SingletonSet extends AbstractEnumerableSet {\n  constructor(member) {\n    super();\n    this.member = member;\n  }\n\n  // このサブクラスでは以下の３つのメソッドを実装する。この３つのメソッドを使って\n  // 動作するisEmpty()、toString()、equals()メソッドは実装は継承する。\n  has(x) {\n    return x === this.member;\n  }\n\n  get size() {\n    return 1;\n  }\n\n  *[Symbol.iterator]() {\n    yield this.member;\n  }\n}\n\n/**\n * AbstractWritableSetは、AbstractEnumerableSetの抽象サブクラス。\n * セットから個々のメンバーを挿入したり消去するために、\n * それぞれinsert()とremove()抽象メソッドを定義する。\n * また、この２つのメソッドを使って、add()、subtract()、intersect()、\n * 具体メソッドを実装する。このAPI群は、JavaScript標準のSetクラスと\n * 異なっているので注意。\n */\n\nclass AbstractWritableSet extends AbstractEnumerableSet {\n  insert(x) {\n    throw new Error(\"Abstract method\");\n  }\n  remove(x) {\n    throw new Error(\"Abstract method\");\n  }\n\n  add(set) {\n    for (let x of set) {\n      this.insert(x);\n    }\n  }\n}\n\n/**\n * BitSetは、AbstractWritableSetの具象サブクラス。ある最大値よりも\n * 小さい非負の整数のメンバーとなるセットに対して、非常に効率的な\n * 固定サイズのセットを実装する。\n */\n\nclass BitSet extends AbstractWritableSet {\n  constructor(max) {\n    super();\n    this.max = max; //保存可能な最大整数。\n    this.n = 0; //セット中に含まれる整数の数。\n    this.numBytes = Math.floor(max / 8) + 1; //必要なバイト数。\n    this.data = new Uint8Array(this.numBytes); //ビット配列。\n  }\n\n  // このセットに保存可能な値かどうかを確認する内部メソッド。\n  _valid(x) {\n    return Number.isInteger(x) && x >= 0 && x <= this.max;\n  }\n\n  // data配列のあるバイトのあるビットが立っているかどうかを調べる。\n  // trueまたはfalseを返す。\n  _has(byte, bit) {\n    return (this.data[byte] & BitSet.bits[bit]) !== 0;\n  }\n\n  //値xがBitSetに含まれるかどうか。\n  has(x) {\n    if (this._valid(x)) {\n      let byte = Math.floor(x / 8);\n      let bit = x % 8;\n      return this._has(byte, bit);\n    } else {\n      return false;\n    }\n  }\n\n  // 値xをBitSetに挿入する。\n  Insert(x) {\n    if (this._valid(x)) {\n      // 値が正当な場合、\n      let byte = Math.floor(x / 8); //バイトとビットに変換する。\n      let bit = x % 8;\n      if (!this._has(byte, bit)) {\n        // そのビットがまだ立っていない場合、\n        this.data[byte] |= BitSet.bits[bit]; // ビットを立てる。\n        this.n++; // セットの大きさをインクリメントする。\n      }\n    } else {\n      throw new Error(\"Invalid set element: \" + x);\n    }\n  }\n\n  // セットの大きさを返すゲッターメソッド。\n  get size() {\n    return this.n;\n  }\n\n  // 単にビットが立っているかどうかをチェックすることで巡回する。\n  // (このコードはあまり賢くなく、大幅に最適化できる。)\n  *[Symbol.iterator]() {\n    for (let i = 0; i <= this.max; i++) {\n      if (this.has(i)) {\n        yield i;\n      }\n    }\n  }\n}\n\n// has()、insert()、remove()メソッドで使うために事前に計算しておく。\nBitSet.bits = new Uint8Array([1, 2, 4, 8, 16, 32, 64, 128]);\nBitSet.masks = new Uint8Array([~1, ~2, ~4, ~8, ~16, ~32, ~64, ~128]);\n\n\n//# sourceURL=webpack://preset-js/./ch10/ex01/sets.cjs?\n}");

/***/ }),

/***/ "./ch10/ex01/stats.cjs":
/*!*****************************!*\
  !*** ./ch10/ex01/stats.cjs ***!
  \*****************************/
/***/ (() => {

eval("{const stats = (function () {\n  // モジュールに閉じたユーティリティ関数\n  const sum = (x, y) => x + y;\n  const square = (x) => x * x;\n\n  // エクスポートする公開関数。\n  function mean(data) {\n    return data.reduce(sum) / data.length;\n  }\n\n  // エクスポートする公開関数。\n  function stddev(data) {\n    let m = mean(data);\n    return Math.sqrt(\n      data\n        .map((x) => square(x - m))\n        .map(square)\n        .reduce(sum) /\n        (data.length - 1)\n    );\n  }\n\n  // オブジェクトのプロパティとして公開関数をエクスポートする。\n  return { mean, stddev };\n})();\n\n// モジュールの使い方を以下に示す。\nstats.mean([1, 3, 5, 7, 9]); // => 5\nstats.stddev([1, 3, 5, 7, 9]); // => Math.sqrt(10)\n\n\n//# sourceURL=webpack://preset-js/./ch10/ex01/stats.cjs?\n}");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./ch10/ex01/index.cjs");
/******/ 	
/******/ })()
;