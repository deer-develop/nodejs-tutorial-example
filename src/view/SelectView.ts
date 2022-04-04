import { Cli } from "../cli";
import { Entity } from "../types";

export class SelectView {
  constructor(private cli: Cli) {}

  printItems(items: Entity[]) {
    items.forEach((item) => {
      this.cli.print(`${item.id}) ${item.title}\n`);
    });
  }

  printExitOption(text: string) {
    this.cli.print(`x) ${text}\n`);
  }

  async ask() {
    return await this.cli.ask("\n선택: ");
  }
}
