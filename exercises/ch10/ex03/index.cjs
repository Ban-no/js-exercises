// math.cjs からオブジェクトとして受け取る
const math = require("./math.cjs");
console.log("2 + 3 =", math.add(2, 3)); // 2 + 3 = 5
console.log("10 - 7 =", math.subtract(10, 7)); // 10 - 7 = 3

// Person.cjs からクラスを受け取る
const Person = require("./Person.cjs");
const alice = new Person("Alice", 25);
console.log(alice.greet()); // Hello, my name is Alice, and I am 25 years old.
