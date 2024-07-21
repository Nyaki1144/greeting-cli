import { getDate } from "./date.js";

function getArguments() {
  return process.argv.slice(2);
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

function createString(flag, defGreeting, defName, defDataText) {
  const name = flag["-n"] || flag["--name"] || defName;
  const greeting = flag["-g"] || flag["--greeting"] || defGreeting;
  const lvl = flag["-lvl"] === "2" || flag["-level"] === "2" ? `(${defDataText} ${getDate()})` : "";

  return `${greeting} ${name} ${lvl}`;
}

export { getArguments, getDefaultParametrs, createString };
