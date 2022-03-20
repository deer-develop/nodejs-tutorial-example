import { Program } from "./Program";
import { Post } from "../Post";

export class PostingProgram extends Program {
  constructor(private readonly posts: Post[]) {
    super();
    this.posts = posts;
  }

  private getSizeOfPosts() {
    return this.posts.length;
  }

  async run(): Promise<Post[]> {
    const title = await this.commander.ask("제목: ");
    const content = await this.commander.ask("내용: ");
    const id = this.getSizeOfPosts() + 1;

    const newPost = new Post(id, title, content);

    this.commander.print(`\n게시글을 저장했습니다. id: ${newPost.id}`);
    return [...this.posts, newPost];
  }
}
