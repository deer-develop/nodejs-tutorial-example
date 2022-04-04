import { Cli } from "../cli";
import { Entity } from "../types";

export class SelectView {
  constructor(private cli: Cli) {}

  printItems(items: Entity[]) {
    items.forEach((item) => {
      this.cli.print(`${item.id}) ${item.title}\n`);
    });
  }

  printExitOption() {
    this.cli.print("x) 뒤로가기\n");
  }

  async ask() {
    return await this.cli.ask("선택: ");
  }
}
