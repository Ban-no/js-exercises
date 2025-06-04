/* eslint-disable */
console.log("--- let ---");
for (let i = 0; i < 10; i++) {
  (function () {
    let i = 100;
  })();
  console.log(i);
}
console.log(i);

console.log("--- var ---");
for (var i = 0; i < 10; i++) {
  (function () {
    var i = 100;
  })();
  console.log(i);
}
console.log(i);

console.log("--- let消去 ---");
for (i = 0; i < 10; i++) {
  (function () {
    i = 100;
  })();
  console.log(i);
}
console.log(i);
