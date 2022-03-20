import * as readline from "readline";
import { Program } from "./Program";
import { Menu } from "./Menu";

export const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const program = new Program([new Menu(1, "목록 조회"), new Menu(2, "쓰기")]);
program.run();
