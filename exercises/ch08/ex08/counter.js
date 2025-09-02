function counter() {
  let n = 0;
  return {
    count: function () {
      return n++;
    },
    reset: function () {
      n = 0;
    },
  };
}

let c = counter(),
  d = counter();
c.count();
d.count();
c.reset();
c.count();
d.count();

function counter(n) {
  return {
    get count() {
      return n++;
    },
    set count(m) {
      if (m > n) n = m;
      else throw new Error("count can only be set to a larger value");
    },
  };
}
let c = counter(1000);
