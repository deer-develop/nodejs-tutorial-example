import { Program } from "./Program";
import { Dictonary } from "../types/Item";

export class ViewProgram extends Program {
  constructor(private items: Dictonary[]) {
    super();
    this.items = items;
  }

  run() {
    this.items.forEach((item) => {
      this.commander.print(`${item.key}: ${item.value}\n`);
    });
  }
}
