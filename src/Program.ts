import { Commander } from "./Commander";
import { rl } from "./index";
import { CommandError } from "./CommandError";

interface ProgramCommand {
  run: () => void;
}

export class Program implements ProgramCommand {
  commander: Commander;
  commandError: CommandError;
  constructor(commandError: CommandError) {
    this.commandError = commandError;
    this.commander = new Commander(rl);
  }

  run() {
    return;
  }

  protected restart() {
    this.run();
  }

  protected throwCommandError() {
    console.log(`\n${this.commandError.message}\n`);
    this.restart();
  }
}
