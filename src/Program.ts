import { Commander } from "./Commander";
import { rl } from "./index";
import { Item } from "./types/Item";
import { QuitOption } from "./QuitOption";

// 다형성을 가지는 클래스 만들기 -> quitOption 있는 것과 없는 것을 구분할 수 있지 않을까?
interface ProgramCommand {
  run: () => void;
}
export class Program implements ProgramCommand {
  questions: Item[];
  commander: Commander;
  quitOption?: QuitOption;
  previousProgram?: Program;
  private error =
    "입력이 올바르지 않습니다. 아래 선택지의 맨 앞 문자를 입력해주세요.";

  constructor(
    questions: Item[],
    quitOption?: QuitOption,
    previousProgram?: Program
  ) {
    this.questions = questions;
    this.quitOption = quitOption;
    this.previousProgram = previousProgram;
    this.commander = new Commander(rl);
  }

  private makeQuestions(): void {
    this.questions.map((q) => {
      this.commander.print(`${q.id}) ${q.title}\n`);
    });
  }

  private restart() {
    this.run();
  }

  private showError() {
    console.log(`\n${this.error}\n`);
    this.restart();
  }

  private validateAnswer(answer: string): boolean {
    if (
      ![
        ...this.questions.map((q) => String(q.id)),
        this.quitOption && "x",
      ].includes(answer)
    ) {
      this.showError();
      return false;
    }
    return true;
  }

  run() {
    this.makeQuestions();

    if (this.quitOption) {
      this.commander.print(this.quitOption.getText());
    }
    this.commander.ask("\n선택: ").then((answer) => {
      if (this.validateAnswer(answer)) {
        this.questions[parseInt(answer) - 1].select();
      }
    });
  }
}

// 작성 프로그램
// 조회 프로그램
// 세부조회 프로그램

// 매번 새로운 프로그램이 생길 때마다 새로운 클래스를 지정해줘야하나?
