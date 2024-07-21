import { getDefaultParametrs } from "./tool.js";

describe("check parametrs", () => {
  test("check English", () => {
    expect(getDefaultParametrs({})).toEqual(["Hello", "guest", "Date and Time:"]);
  });
  test("check Russian", () => {
    expect(getDefaultParametrs({ "-l": "rus" })).toEqual(["Здравствуйте", "гость", "Дата и время:"]);
  });
  test("check Armenian", () => {
    expect(getDefaultParametrs({ "-l": "arm" })).toEqual(["Ողջույն", "հյուր", "Ամսաթիվ և ժամ:"]);
  });
});
