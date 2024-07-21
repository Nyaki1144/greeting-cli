function getFlags(arg) {
  const flags = {
    "--name": null,
    "-n": null,
    "-level": null,
    "-lvl": null,
    "--language": null,
    "-l": null,
    "--greeting": null,
    "-g": null,
  };

  checkingFlags(arg, flags);
  setFlags(arg, flags);

  return flags;
}

function setFlags(arg, flags) {
  arg.forEach((el, i, arr) => {
    if (arr[i + 1] === undefined) return;
    if (el in flags && !(arr[i + 1] in flags)) flags[el] = arr[i + 1];
  });
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
