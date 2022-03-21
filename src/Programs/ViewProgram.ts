import { Program } from "./Program";
import { Dictonary } from "../types/Item";
import { Exit } from "../Exit";

export class ViewProgram extends Program {
  constructor(private items: Dictonary[], private readonly goBack: () => void) {
    super();
    this.items = items;
    this.goBack = goBack;
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
