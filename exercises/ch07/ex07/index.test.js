import { mergeSort } from "./index.js";

test("昇順にソートされる", () => {
  expect(mergeSort([3, 1, 2])).toEqual([1, 2, 3]);
});

test("空配列", () => {
  expect(mergeSort([])).toEqual([]);
});

test("要素が1つ", () => {
  expect(mergeSort([42])).toEqual([42]);
});

test("すでにソート済み", () => {
  expect(mergeSort([1, 2, 3])).toEqual([1, 2, 3]);
});

test("降順ソートもできる", () => {
  expect(mergeSort([1, 3, 2], (a, b) => b - a)).toEqual([3, 2, 1]);
});

test("文字列のソート", () => {
  expect(mergeSort(["banana", "apple", "cherry"])).toEqual([
    "apple",
    "banana",
    "cherry",
  ]);
});
