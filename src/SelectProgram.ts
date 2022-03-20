import { Program } from "./Program";
import { CommandError } from "./CommandError";
import { Item } from "./types/Item";

export class SelectProgram extends Program {
  constructor(private items: Item[], commandError: CommandError) {
    super(commandError);
    this.items = items;
  }

  // item 출력
  private printItems() {
    this.items.forEach((item) => {
      this.commander.print(`${item.id}) ${item.title}\n`);
    });
  }

  private ask(): Promise<string> {
    return new Promise((resolve) => {
      this.commander.ask("\n선택: ").then(resolve);
    });
  }

  private validate(answer: string): boolean {
    return [...this.items.map((item) => String(item.id))].includes(answer);
  }

  async run() {
    this.printItems();
    const answer = await this.ask();
    if (!this.validate(answer)) {
      this.throwCommandError();
    } else {
      const item = this.items.find((item) => String(item.id) === answer);
      if (!item) return;
      item.select();
    }
  }
}
