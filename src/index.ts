import * as readline from "readline";
import { Program } from "./Program";
import { Menu } from "./Menu";
import { SelectProgram } from "./SelectProgram";
import { CommandError } from "./CommandError";

export const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const program = new SelectProgram(
  [new Menu(1, "목록 조회"), new Menu(2, "쓰기")],
  new CommandError(
    "입력이 올바르지 않습니다. 아래 선택지의 맨 앞 문자를 입력해주세요."
  )
);
program.run();
