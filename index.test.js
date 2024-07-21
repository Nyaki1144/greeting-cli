import { getDefaultParametrs, createString } from "./src/tool.js";
import { getFlags } from "./src/flag.js";

describe("check parametrs", () => {
  test("check arg1", () => {
    const arg = ["--name", "Narek", "--greeting", "Hi"];
    const flag = getFlags(arg);
    const [defGreeting, defName, defDataText] = getDefaultParametrs(flag);
    expect(createString(flag, defGreeting, defName, defDataText)).toBe("Hi Narek ");
  });
  test("check arg2", () => {
    const arg = ["--greeting", "Hi"];
    const flag = getFlags(arg);
    const [defGreeting, defName, defDataText] = getDefaultParametrs(flag);
    expect(createString(flag, defGreeting, defName, defDataText)).toBe("Hi guest ");
  });
  test("check arg3", () => {
    const arg = [];
    const flag = getFlags(arg);
    const [defGreeting, defName, defDataText] = getDefaultParametrs(flag);
    expect(createString(flag, defGreeting, defName, defDataText)).toBe("Hello guest ");
  });
});
