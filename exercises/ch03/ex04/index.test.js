test('length of "💯" is 2', () => {
  let Hundred = "💯";
  expect(Hundred.length).toBe(2); // コードポイントの長さ
});

test('UTF-16 code point representation "\\uD83D\\uDCAF" is equal to "💯"', () => {
  let utf16Hundred = "\uD83D\uDCAF"; // UTF-16のコードポイントで表現
  let Hundred = "💯";
  expect(utf16Hundred).toBe(Hundred);
});

test('UTF-32 code point representation "💯" is equal to "💯"', () => {
  let utf32Hundred = "💯";
  let Hundred = "💯";
  expect(utf32Hundred).toBe(Hundred); // UTF-32のコードポイントで表現
});
