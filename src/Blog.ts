import { Menu } from "./Menu";
import { Post } from "./Post";
import { SelectProgram } from "./SelectProgram";
import { CommandError } from "./CommandError";

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

  lookupPosts() {
    console.log("lookup");
  }

  createPost() {
    console.log("write");
  }

  private async selectMenu() {
    const program = new SelectProgram(this.menus);
    try {
      const answer = parseInt(await program.run());
      if (answer === MenuID.LOOKUP) this.lookupPosts();
      if (answer === MenuID.WRITE) this.createPost();
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
