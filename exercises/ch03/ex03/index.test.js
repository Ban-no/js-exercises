import { fn } from "./index";

test("0.3 - 0.2 is approximately equal to 0.1", () => {
  expect(fn(0.3 - 0.2, 0.1)).toBe(true);
});

test("0.2 - 0.1 is approximately equal to 0.1", () => {
  expect(fn(0.2 - 0.1, 0.1)).toBe(true);
});
