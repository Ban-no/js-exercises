export class C {
  // ① C.method() → 1
  static method() {
    return 1;
  }

  // ② new C().method() → 2
  method() {
    return 2;
  }

  // ③ C.C.method() → 3
  // ④ new C.C().method() → 4
  static C = class {
    static method() {
      return 3;
    }

    method() {
      return 4;
    }
  };

  // ⑤ new C().C.method() → 5
  // ⑥ new new C().C().method() → 6
  C = class {
    static method() {
      return 5;
    }

    method() {
      return 6;
    }
  };
}
