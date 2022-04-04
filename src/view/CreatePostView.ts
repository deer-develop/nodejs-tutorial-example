import { Cli } from "../cli";

export class CreatePostView {
  constructor(private cli: Cli) {}

  async askTitle() {
    return await this.cli.ask("제목: ");
  }

  async askContent() {
    return await this.cli.ask("내용: ");
  }

  printResult(id: number, title: string, content: string) {
    this.cli.print(`제목: ${title}\n`);
    this.cli.print(`내용: ${content}\n`);
    this.cli.print(`\n게시글을 저장했습니다. id: ${id}\n\n`);
  }

  async askGoBack() {
    return await this.cli.ask("엔터 키를 누르면 이전 화면으로 되돌아갑니다.");
  }
}
