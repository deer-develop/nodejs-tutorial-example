import { Program } from "./Program";
import { Post } from "../Post";

export class PostingProgram extends Program {
  constructor(
    private readonly posts: Post[],
    private readonly goBack: () => void
  ) {
    super();
    this.posts = posts;
    this.goBack = goBack;
  }

  private getSizeOfPosts() {
    return this.posts.length;
  }

  async run(): Promise<Post[]> {
    const title = await this.commander.ask("제목: ");
    const content = await this.commander.ask("내용: ");
    const id = this.getSizeOfPosts() + 1;

    const newPost = new Post(id, title, content);

    this.commander.print(`제목: ${newPost.title}\n`);
    this.commander.print(`내용: ${newPost.content}\n`);

    this.commander.print(`\n게시글을 저장했습니다. id: ${newPost.id}\n`);

    this.commander
      .ask("\n엔터 키를 누르면 이전 화면으로 되돌아갑니다.")
      .then((_) => {
        this.goBack();
      });
    return [...this.posts, newPost];
  }
}
