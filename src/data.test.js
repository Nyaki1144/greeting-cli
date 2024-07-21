import { getDate } from "./date.js";

test("check date", () => {
  const date = new Date();
  expect(getDate()).toBe(
    `${date.getFullYear()}-${date.getMonth()}-${date.getDate()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
  );
});
