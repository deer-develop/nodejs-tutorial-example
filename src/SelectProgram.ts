import { Program } from "./Program";
import { Item } from "./types/Item";
import { CommandError } from "./CommandError";

export class SelectProgram extends Program {
  constructor(private items: Item[]) {
    super();
    this.items = items;
  }

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

  async run(): Promise<string> {
    this.printItems();
    const answer = await this.ask();
    if (!this.validate(answer)) {
      throw new CommandError(
        "입력이 올바르지 않습니다. 아래 선택지의 맨 앞 문자를 입력해주세요."
      );
    }
    return answer;
  }
}
