import { getArguments, getDefaultParametrs, createString } from "./src/tool.js";
import { getFlags } from "./src/flag.js";

const yellowColor = "\x1b[33m%s\x1b[0m";

function init() {
  const arg = getArguments();
  const flag = getFlags(arg);
  const [defGreeting, defName, defDataText] = getDefaultParametrs(flag);
  return createString(flag, defGreeting, defName, defDataText);
}

console.log(yellowColor, init());
