import { getArguments, getFlags, getDate, getDefaultParametrs } from "./tool.js";

const argum = getArguments();
const flag = getFlags(argum);

const [defGreeting, defName, defDataText] = getDefaultParametrs(flag);

const name = flag["-n"] || flag["--name"] || defName;
const greeting = flag["-g"] || flag["--greeting"] || defGreeting;
const lvl = flag["-lvl"] === "1" || flag["-level"] === "1" ? "" : `(${defDataText} ${getDate()})`;

const str = `${greeting} ${name} ${lvl}`;

console.log(str);
