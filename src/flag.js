import { getHelpText } from "./tool.js";

function getFlags(arg) {
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

  checkingFlags(arg, flags);
  const data = setFlags(arg, flags);

  if (data.h || data.help) {
    console.log(data);
  }
  return data;
}

function setFlags(args, flags) {
  const clone = { ...flags };

  for (let i = 0; i < args.length; i++) {
    const el = args[i];

    if (el === "-h" || el === "--help") {
      console.log(getHelpText());
      process.exit(1);
    }

    if (el in clone && args[i + 1] && !(args[i + 1] in clone)) {
      clone[el] = args[i + 1];
      i++;
    }
  }

  return clone;
}

function checkingFlags(arg, flags) {
  const reg = /^-|^--/gm;
  const redColor = "\x1b[31m%s\x1b[0m";
  arg.forEach((el) => {
    if (reg.test(el) && !(el in flags)) {
      console.error(redColor, `${el} is wrong flag, check --help or -h for more information`);
      process.exit(1);
    }
  });
}

export { getFlags };
