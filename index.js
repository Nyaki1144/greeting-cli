import { getArguments, checkType } from "./tool.js";

const argum = getArguments();
const flag = checkType(argum);

function chechLenguage(flag) {
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

const [defGreeting, defName, defDataText] = chechLenguage(flag);
const name = flag["-n"] || flag["--name"] || defName;
const greeting = flag["-g"] || flag["--greeting"] || defGreeting;

const lvl = flag["-lvl"] === "1" || flag["-level"] === "1" ? "" : `(${defDataText} ${getDate()})`;

function getDate() {
  const date = new Date();
  return `${date.getFullYear()}-${date.getMonth()}-${date.getDate()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
}

const str = `${greeting} ${name} ${lvl}`;

// console.log(new Date());
console.log(str);
