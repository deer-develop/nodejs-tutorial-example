import { Dictonary } from "../types/Item";
import { Commander } from "../Commander";
import { Program } from "./Program";

export class ViewProgram implements Program<void> {
  constructor(
    private items: Dictonary[],
    private readonly goBack: () => void,
    private commander: Commander
  ) {
    this.items = items;
    this.goBack = goBack;
    this.commander = commander;
  }

  run() {
    this.items.forEach((item) => {
      this.commander.print(`${item.key}: ${item.value}\n`);
    });
    this.commander
      .ask("\n엔터 키를 누르면 이전 화면으로 되돌아갑니다.")
      .then((_) => this.goBack());
  }
}
