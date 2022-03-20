import { Menu } from "./Menu";
import { Post } from "./Post";
import { SelectProgram } from "./Programs/SelectProgram";
import { CommandError } from "./CommandError";
import { ViewProgram } from "./Programs/ViewProgram";
import { PostingProgram } from "./Programs/PostingProgram";

enum MenuID {
  LOOKUP = 1,
  WRITE = 2,
}

export class Blog {
  private readonly menus: Menu[];
  constructor(private posts: Post[]) {
    this.posts = posts;
    this.menus = [
      new Menu(MenuID.LOOKUP, "목록 조회"),
      new Menu(MenuID.WRITE, "쓰기"),
    ];
  }

  async selectPost() {
    const selectProgram = new SelectProgram(this.posts);
    try {
      const selectedPost = (await selectProgram.run()) as Post;
      this.viewPost(selectedPost);
    } catch (e) {
      if (e instanceof CommandError) {
        console.log(e.message);
        this.selectPost();
      }
    }
  }

  private viewPost(post: Post) {
    new ViewProgram([
      { key: "제목", value: post.title },
      { key: "내용", value: post.content },
    ]).run();
  }

  private createPost() {
    new PostingProgram(this.posts).run().then((posts) => {
      this.posts = posts;
    });
  }

  private handleMenuSelect(id: MenuID) {
    if (id === MenuID.LOOKUP) this.selectPost();
    if (id === MenuID.WRITE) this.createPost();
  }

  private async selectMenu() {
    const selectProgram = new SelectProgram(this.menus);
    try {
      const selectedMenu = await selectProgram.run();
      this.handleMenuSelect(selectedMenu.id);
    } catch (e) {
      if (e instanceof CommandError) {
        console.log(e.message);
        this.selectMenu();
      }
    }
  }

  open() {
    this.selectMenu();
  }
}
