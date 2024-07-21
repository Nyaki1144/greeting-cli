import { getFlags, setFlags } from "./flag.js";

const flags = {
  "--name": null,
  "--level": null,
  "--language": null,
  "--greeting": null,
  "--help": false,
  "-n": null,
  "-lvl": null,
  "-l": null,
  "-g": null,
  "-h": false,
};

describe("processArgs", () => {
  const arg = ["--name", "Narek", "--greeting", "Hi"];
  test("check date", () => {
    expect(setFlags(flags, arg)).toEqual({ 0: "--name", 1: "Narek", 2: "--greeting", 3: "Hi" });
  });

  test("check date", () => {
    const arg = ["--name", "Narek", "--greeting", "Hi"];
    expect(getFlags(arg)).toEqual({
      "--greeting": "Hi",
      "--help": false,
      "--language": null,
      "--level": null,
      "--name": "Narek",
      "-g": null,
      "-h": false,
      "-l": null,
      "-lvl": null,
      "-n": null,
    });
  });
});
