import * as readline from "readline";
import askQuestion from "./pages/ask";

class Commander {
  private rl: readline.Interface;

  constructor() {
    this.rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });
  }

  terminate() {
    this.rl.close();
  }

  async ask(text: string): Promise<string> {
    return new Promise((resolve) => {
      this.rl.question(text, (answer) => {
        console.clear();
        resolve(answer);
      });
    });
  }

  onEnter() {
    this.rl.on("line", () => {
      console.clear();
      askQuestion();
    });
  }
}

const commander = new Commander();

export default commander;
