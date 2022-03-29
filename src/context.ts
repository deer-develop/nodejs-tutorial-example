import { SelectView } from "./view/SelectView";
import { PostDetailView } from "./view/PostDetailView";
import { PostQueryService } from "./service/PostQueryService";
import { PostCreateService } from "./service/PostCreateService";
import { Store } from "./store";
import { Cli } from "./cli";
import * as readline from "readline";
import { PostRepository } from "./repository/PostRepository";
import { posts } from "./data/posts";

export interface Context {
  // view
  selectView: SelectView;
  postDetailView: PostDetailView;
  // service
  postQueryService: PostQueryService;
  postCreateService: PostCreateService;
  //store
  store: Store;
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

export const createContext = (): Context => {
  const cli = new Cli(rl);
  const store = new Store();
  const selectView = new SelectView(cli);
  const postDetailView = new PostDetailView(cli);

  const postRepository = new PostRepository(posts);

  const postQueryService = new PostQueryService(postRepository);
  const postCreateService = new PostCreateService(postRepository);

  return {
    selectView,
    postDetailView,
    postQueryService,
    postCreateService,
    store,
  };
};
