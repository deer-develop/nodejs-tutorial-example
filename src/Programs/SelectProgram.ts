import { Item } from "../types/Item";
import { CommandError } from "../CommandError";
import { Exit } from "../Exit";
import { Commander } from "../Commander";
import { Program } from "./Program";

export class SelectProgram implements Program<Item> {
  constructor(
    private items: Item[],
    private exit: Exit,
    private commander: Commander
  ) {
    this.items = items;
    this.exit = exit;
    this.commander = commander;
  }

  private printItems() {
    this.items.forEach((item) => {
      this.commander.print(`${item.id}) ${item.title}\n`);
    });
  }

  private printQuitOption() {
    this.commander.print(this.exit.toString());
  }

  private ask(): Promise<string> {
    return new Promise((resolve) => {
      this.commander.ask("\n선택: ").then(resolve);
    });
  }

  private validate(answer: string): boolean {
    return [
      ...this.items.map((item) => String(item.id)),
      this.exit.hotKey(),
    ].includes(answer);
  }

  async run(): Promise<Item | undefined> {
    this.printItems();
    this.printQuitOption();

    const answer = await this.ask();

    if (!this.validate(answer)) {
      throw new CommandError(
        "입력이 올바르지 않습니다. 아래 선택지의 맨 앞 문자를 입력해주세요."
      );
    }

    if (answer === this.exit.hotKey()) {
      this.exit.run();
      return;
    }

    return this.items.find((item) => item.id === parseInt(answer))!;
  }
}
