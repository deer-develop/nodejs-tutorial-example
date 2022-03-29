interface ProgramCommand {
  run: () => void;
}

export class Program {
  run() {
    console.log("hello");
  }
}
