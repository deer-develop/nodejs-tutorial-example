import { Commander } from "./Commander";
import { rl } from "./index";

interface ProgramCommand {
  run: () => void;
}

class CommandError {
  message: string;
  constructor(message: string) {
    this.message = message;
  }
}

class Program implements ProgramCommand {
  commander: Commander;
  constructor(
    private previousProgram: Program,
    private readonly commandError?: CommandError
  ) {
    this.previousProgram = previousProgram;
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
    console.log(`\n${this.commandError}\n`);
    this.restart();
  }
}
