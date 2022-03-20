import * as readline from "readline";

export class Commander {
  constructor(private rl: readline.Interface) {
    this.rl = rl;
  }

  print(value: string) {
    this.rl.write(value);
  }

  async ask(text: string): Promise<string> {
    return new Promise((resolve) => {
      this.rl.question(text, resolve);
    });
  }
}
