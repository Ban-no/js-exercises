import { convertLfToCrlf, convertCrlfToLf } from "./index";

test("convertLfToCrlf should replace LF with CR+LF", () => {
  expect(convertLfToCrlf("Line1\nLine2\nLine3")).toBe(
    "Line1\r\nLine2\r\nLine3"
  );
  expect(convertLfToCrlf("SingleLine\n")).toBe("SingleLine\r\n");
});

test("convertCrlfToLf should replace CR+LF with LF", () => {
  expect(convertCrlfToLf("Line1\r\nLine2\r\nLine3")).toBe(
    "Line1\nLine2\nLine3"
  );
  expect(convertCrlfToLf("SingleLine\r\n")).toBe("SingleLine\n");
});
