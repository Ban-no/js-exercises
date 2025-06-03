class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  distance() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }

  add(otherPoint) {
    this.x += otherPoint.x;
    this.y += otherPoint.y;
  }
}

// クラスをエクスポート
export { Point };

/*let p1 = new Point(0, 0);
let p2 = new Point(0, 4);

console.log(`Distance: ${p2.distance()}`);

console.log(`Before add: p1 = (${p1.x}, ${p1.y})`);
p1.add(p2);
console.log(`After add: p1 = (${p1.x}, ${p1.y})`);*/
