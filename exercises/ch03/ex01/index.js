let values = [Infinity, -Infinity, NaN];

for (let a of values) {
  for (let b of values) {
    console.log(`===${a} と ${b} の計算===`);
    console.log(`${a} + ${b} =`, a + b);
    console.log(`${a} - ${b} =`, a - b);
    console.log(`${a} * ${b} =`, a * b);
    console.log(`${a} / ${b} =`, a / b);
  }
}
