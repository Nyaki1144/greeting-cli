function getArguments() {
  return process.argv.slice(2);
}

function checkType(arg) {
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

  arg.forEach((el, i, arr) => {
    if (arr[i + 1] === undefined) return;
    if (el in flags && !(arr[i + 1] in flags)) flags[el] = arr[i + 1];
  });

  return flags;
}
export { getArguments, checkType };
