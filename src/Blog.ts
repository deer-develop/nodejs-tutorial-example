import { Menu } from "./Menu";
import { Post } from "./Post";
import { SelectProgram } from "./Programs/SelectProgram";
import { CommandError } from "./CommandError";
import { ViewProgram } from "./Programs/ViewProgram";
import { PostingProgram } from "./Programs/PostingProgram";
import { Exit } from "./Exit";
import { Commander } from "./Commander";
import { rl } from "./index";

enum MenuID {
  LOOKUP = 1,
  WRITE = 2,
}

export class Blog {
  private readonly menus: Menu[];
  private readonly commander: Commander;

  constructor(private readonly posts: Post[]) {
    this.posts = posts;
    this.menus = [
      new Menu(MenuID.LOOKUP, "목록 조회"),
      new Menu(MenuID.WRITE, "쓰기"),
    ];
    this.commander = new Commander(rl);
  }

  open() {
    this.selectMenu();
  }

  private async selectMenu() {
    const selectProgram = new SelectProgram(
      this.menus,
      new Exit({
        text: "종료",
        hotKey: "x",
        executor: () => {
          console.log("종료되었습니다.");
        },
      }),
      this.commander
    );

    try {
      const selectedMenu = await selectProgram.run();
      if (!selectedMenu) return;
      if (selectedMenu.id === MenuID.LOOKUP) this.selectPost();
      if (selectedMenu.id === MenuID.WRITE) this.createPost();
    } catch (e) {
      if (e instanceof CommandError) {
        console.log(e.message);
        this.selectMenu();
      }
    }
  }

  private async selectPost() {
    const selectProgram = new SelectProgram(
      [...this.posts],
      new Exit({
        text: "뒤로가기",
        hotKey: "x",
        executor: () => {
          this.selectMenu();
        },
      }),
      this.commander
    );
    try {
      const selectedPost = await selectProgram.run();
      if (!selectedPost) return;

      this.viewPost(selectedPost as Post);
    } catch (e) {
      if (e instanceof CommandError) {
        console.log(e.message);
        this.selectPost();
      }
    }
  }

  private viewPost(post: Post) {
    new ViewProgram(
      [
        { key: "제목", value: post.title },
        { key: "내용", value: post.content },
      ],
      () => {
        this.selectPost();
      },
      this.commander
    ).run();
  }
  private addPost(post: Post) {
    this.posts.push(post);
  }
  private createPost() {
    new PostingProgram(
      this.posts.length,
      () => {
        this.selectMenu();
      },
      this.commander
    )
      .run()
      .then((post) => {
        this.addPost(post);
      });
  }
}
