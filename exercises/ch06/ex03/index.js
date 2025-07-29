let o = {};
o.x = 1;

let p = Object.create(o);
p.y = 2;

let q = Object.create(p);
q.z = 3;

let f = q.toString(); // toString は Object から来てる
q.x + q.y; // q は親や祖父からプロパティを使っている

console.log(
  "o が p および q のプロトタイプチェーン上に存在すること、および、p が q のプロトタイプチェーン上に存在することを確認"
);
console.log(o.isPrototypeOf(p)); // true（o は p の親）
console.log(o.isPrototypeOf(q)); // true（o は q の祖父）
console.log(p.isPrototypeOf(q)); // true（p は q の親）

const arr = [];
const date = new Date();
const map = new Map();

console.log("Object はすべての親のようなものなので true になる");
console.log(Object.prototype.isPrototypeOf(arr)); // true
console.log(Object.prototype.isPrototypeOf(date)); // true
console.log(Object.prototype.isPrototypeOf(map)); // true

console.log("各自のクラスの prototype も確認してみる");
console.log(Array.prototype.isPrototypeOf(arr)); // true
console.log(Date.prototype.isPrototypeOf(date)); // true
console.log(Map.prototype.isPrototypeOf(map)); // true

console.log("例えば Date.prototype は Map の親ではない");
console.log(Date.prototype.isPrototypeOf(map)); // false
