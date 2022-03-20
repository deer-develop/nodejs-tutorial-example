import { Program } from "./Program";

export class QuitOption {
  private readonly text: string;
  private readonly previousProgram?: Program;
  constructor(text: string, previousProgram?: Program) {
    this.text = text;
    this.previousProgram = previousProgram;
  }

  getText() {
    return `x) ${this.text}`;
  }

  exit() {
    console.log("프로그램이 종료되었습니다.");
  }

  goBack(): void {
    if (this.previousProgram) {
      this.previousProgram.run();
    }
  }
}
