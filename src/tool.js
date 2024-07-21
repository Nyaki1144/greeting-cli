import { getDate } from "./date.js";

function getArguments() {
  return process.argv.slice(2);
}

function getDefaultParametrs(flag) {
  const language = flag["-l"] || flag["--language"] || "eng";
  let greeting, name, date;
  switch (language) {
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
      date = "Ամսաթիվ և ժամ:";
      break;
  }
  return [greeting, name, date];
}

function createString(flag, defGreeting, defName, defDataText) {
  const name = flag["-n"] || flag["--name"] || defName;
  const greeting = flag["-g"] || flag["--greeting"] || defGreeting;
  const lvl = flag["-lvl"] === "2" || flag["--level"] === "2" ? ` (${defDataText} ${getDate()})` : "";

  return `${greeting} ${name}${lvl}`;
}

function getHelpText() {
  return `
    usage:  [-n | --name] [-h | --help] [-l | --language]
            [-g | --greeting] [-lvl --level]

    name: write your name (by default 'guest')
    language: change language (by default 'eng')
    greeting: write custom greeting message (by default 'Hello')
    level: change level (by default '1')
  `;
}

export { getArguments, getDefaultParametrs, createString, getHelpText };
