import { lfToCrlf, crlfToLf } from "./index.js";

test("lfToCrlf converts LF to CRLF", () => {
  const input = "line1\nline2\nline3";
  const expected = "line1\r\nline2\r\nline3";
  expect(lfToCrlf(input)).toBe(expected);
});

test("crlfToLf converts CRLF to LF", () => {
  const input = "line1\r\nline2\r\nline3";
  const expected = "line1\nline2\nline3";
  expect(crlfToLf(input)).toBe(expected);
});

test("round-trip lfToCrlf -> crlfToLf returns original", () => {
  const original = "a\nb\nc";
  const converted = lfToCrlf(original);
  const restored = crlfToLf(converted);
  expect(restored).toBe(original);
});
