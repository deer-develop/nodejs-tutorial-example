import { Cli } from "../cli";
import { Entity, Post } from "../types";

export class PostDetailView {
  constructor(private cli: Cli) {}

  async printPost(post: Post) {
    this.cli.print(`제목: ${post.title}\n`);
    this.cli.print(`내용: ${post.content}\n`);
    return await this.cli.ask("\n엔터 키를 누르면 이전 화면으로 되돌아갑니다.");
  }
}
