function getArguments() {
  return process.argv.slice(2);
}

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
  const data = arg.find((el) => {
    if (reg.test(el) && !(el in flags)) console.log(`${el} is wrong flag, check --help or -h for more information`);
  });
}

function getDate() {
  const date = new Date();
  return `${date.getFullYear()}-${date.getMonth()}-${date.getDate()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
}

function getDefaultParametrs(flag) {
  const lenguage = flag["-l"] || flag["--lenguage"] || "eng";
  let greeting, name, date;
  switch (lenguage) {
    case "eng":
      greeting = "Hello";
      name = "guest";
      date = "Date and Time:";
      break;
    case "rus":
      greeting = "Здравствуйте";
      name = "гость";
      date = "Дата и время:";
      break;
    case "arm":
      greeting = "Ողջույն";
      name = "հյուր";
      date = "Ամսաթիվ և ժամ";
      break;
  }
  return [greeting, name, date];
}

export { getArguments, getFlags, getDate, getDefaultParametrs };
