import {
  Warrior,
  MagicWarrior,
  WarriorProto,
  MagicWarriorProto,
} from "./index.js";

//
// ---- class 記法のテスト ----
//
describe("class Warrior", () => {
  test("attack should return atk * 2", () => {
    const w = new Warrior(10);
    expect(w.attack()).toBe(20);
  });
});

describe("class MagicWarrior", () => {
  test("attack should return atk * 2 + mgc", () => {
    const mw = new MagicWarrior(10, 5);
    expect(mw.attack()).toBe(25);
  });
});

//
// ---- prototype 記法のテスト ----
//
describe("prototype WarriorProto", () => {
  test("attack should return atk * 2", () => {
    const w = new WarriorProto(7);
    expect(w.attack()).toBe(14);
  });
});

describe("prototype MagicWarriorProto", () => {
  test("attack should return atk * 2 + mgc", () => {
    const mw = new MagicWarriorProto(8, 3);
    expect(mw.attack()).toBe(19);
  });
});
