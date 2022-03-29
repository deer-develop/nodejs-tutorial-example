import { Cli } from "../cli";
import { Entity, Post } from "../types";

export class PostDetailView {
  constructor(private cli: Cli) {}

  printPost(post: Post) {
    this.cli.print(`제목: ${post.title}`);
    this.cli.print(`내용: ${post.content}`);
  }
}
