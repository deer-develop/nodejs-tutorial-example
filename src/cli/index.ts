import * as readline from "readline";

export class Cli {
  constructor(private rl: readline.Interface) {}

  print(value: string) {
    this.rl.write(value);
  }

  async ask(question: string, clear = true): Promise<string> {
    return new Promise((resolve) => {
      this.rl.question(question, (answer) => {
        if (clear) console.clear();
        resolve(answer);
      });
    });
  }
}
