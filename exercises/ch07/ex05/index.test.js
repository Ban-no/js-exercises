import { pop, push, shift, unshift, sort } from "./index.js";

test("popは元の配列を変更せず最後を除いた配列を返す", () => {
  const orig = [1, 2, 3];
  expect(pop(orig)).toEqual([1, 2]);
  expect(orig).toEqual([1, 2, 3]); // 変更されてない
});

test("pushは元の配列を変更せず末尾に追加した配列を返す", () => {
  const orig = [1, 2, 3];
  expect(push(orig, 4)).toEqual([1, 2, 3, 4]);
  expect(orig).toEqual([1, 2, 3]);
});

test("shiftは最初の要素を取り除いた新しい配列を返す", () => {
  const orig = [1, 2, 3];
  expect(shift(orig)).toEqual([2, 3]);
  expect(orig).toEqual([1, 2, 3]);
});

test("unshiftは先頭に要素を追加した配列を返す", () => {
  const orig = [1, 2, 3];
  expect(unshift(orig, 0)).toEqual([0, 1, 2, 3]);
  expect(orig).toEqual([1, 2, 3]);
});

test("sortは並び替えた新しい配列を返し、元の配列を変更しない", () => {
  const orig = [3, 1, 2];
  expect(sort(orig, (a, b) => a - b)).toEqual([1, 2, 3]);
  expect(orig).toEqual([3, 1, 2]);
});
