import { SelectView } from "./view/SelectView";
import { PostDetailView } from "./view/PostDetailView";
import { PostQueryService } from "./service/PostQueryService";
import { PostCreateService } from "./service/PostCreateService";
import { Store } from "./store";
import { Cli } from "./cli";
import * as readline from "readline";
import { PostRepository } from "./repository/PostRepository";
import { posts } from "./data/posts";
import EventEmitter from "events";
import { ViewController } from "./controller/ViewController";
import { CreatePostView } from "./view/CreatePostView";

export interface Context {
  // view
  selectView: SelectView;
  postDetailView: PostDetailView;
  createPostView: CreatePostView;
  //store
  store: Store;
  // controller
  viewController: ViewController;
  eventEmitter: EventEmitter;
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

export const createContext = (): Context => {
  const cli = new Cli(rl);
  const eventEmitter = new EventEmitter();
  const store = new Store(eventEmitter);
  const selectView = new SelectView(cli);
  const postDetailView = new PostDetailView(cli);
  const createPostView = new CreatePostView(cli);

  const postRepository = new PostRepository(posts);

  const postQueryService = new PostQueryService(postRepository);
  const postCreateService = new PostCreateService(postRepository);

  const viewController = new ViewController(
    selectView,
    postDetailView,
    createPostView,
    store,
    postQueryService,
    postCreateService
  );

  return {
    selectView,
    postDetailView,
    createPostView,
    store,
    eventEmitter,
    viewController,
  };
};
