import { SelectView } from "../view/SelectView";
import { Store } from "../store";
import { PostQueryService } from "../service/PostQueryService";
import { PostDetailView } from "../view/PostDetailView";

class ViewController {
  constructor(
    private selectView: SelectView,
    private postDetailView: PostDetailView,
    private store: Store,
    private postQueryService: PostQueryService
  ) {}

  renderHome() {
    this.selectView.printItems(this.store.menus);
    this.selectView.printExitOption();
  }

  renderPostList() {
    const posts = this.postQueryService.getAllPosts();
    this.selectView.printItems(posts);
    this.selectView.printExitOption();
  }

  renderPostDetail(id: number) {
    const post = this.postQueryService.getPost(id);
    this.postDetailView.printPost(post);
  }
}
