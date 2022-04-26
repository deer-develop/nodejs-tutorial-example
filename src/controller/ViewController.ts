import { SelectView } from "../view/SelectView";
import { Store } from "../store";
import { PostQueryService } from "../service/PostQueryService";
import { PostDetailView } from "../view/PostDetailView";
import { CreatePostView } from "../view/CreatePostView";
import { PostCreateService } from "../service/PostCreateService";
import { ViewState } from "../types";

const ERROR_MSG =
  "입력이 올바르지 않습니다. 아래 선택지의 맨 앞 문자를 입력해주세요.\n";

export class ViewController {
  constructor(
    private selectView: SelectView,
    private postDetailView: PostDetailView,
    private createPostView: CreatePostView,
    private store: Store,
    private postQueryService: PostQueryService,
    private postCreateService: PostCreateService
  ) {}

  private updateState(view: ViewState, postId?: number) {
    this.store.updateState({ view, postId });
  }

  async renderHome() {
    this.selectView.printItems(this.store.menus);
    this.selectView.printExitOption("종료");
    const id = await this.selectView.ask();

    if (!["1", "2", "x"].includes(id)) throw new Error(ERROR_MSG);

    if (id === "x") {
      console.log("종료되었습니다.");
      process.exit();
    }

    if (parseInt(id) === 1) this.updateState("SELECT_POST");
    if (parseInt(id) === 2) this.updateState("CREATE_POST");
  }

  async renderPostList() {
    const posts = this.postQueryService.getAllPosts();
    this.selectView.printItems(posts);
    this.selectView.printExitOption("뒤로가기");
    const id = await this.selectView.ask();

    const possibleIds = posts.map((post) => String(post.id));

    if (![...possibleIds, "x"].includes(id)) throw new Error(ERROR_MSG);

    if (id === "x") this.updateState("SELECT_MENU");
    else this.updateState("VIEW_POST", parseInt(id));
  }

  renderPostDetail(id: number) {
    const post = this.postQueryService.getPost(id);
    this.postDetailView.printPost(post).then(() => {
      this.updateState("SELECT_POST");
    });
  }

  async renderCreatePost() {
    const title = await this.createPostView.askTitle();
    const content = await this.createPostView.askContent();

    const newId = this.postQueryService.getAllPosts().length + 1;
    this.postCreateService.createPost({ id: newId, title, content });

    this.createPostView.printResult(newId, title, content);
    this.createPostView.askGoBack().then(() => {
      this.updateState("SELECT_POST");
    });
  }
}
