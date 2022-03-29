import * as readline from "readline";

export class Cli {
  constructor(private rl: readline.Interface) {}

  print(value: string) {
    this.rl.write(value);
  }

  async ask(question: string): Promise<string> {
    return new Promise((resolve) => {
      this.rl.question(question, (answer) => {
        console.clear();
        resolve(answer);
      });
    });
  }
}
