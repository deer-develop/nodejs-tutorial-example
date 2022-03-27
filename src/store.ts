import { Post, AskType, ViewType, WriteType } from "./model";
import { makeAutoObservable, reaction } from "mobx";
import askQuestion from "./pages/ask";
import write from "./pages/write";
import showPost from "./pages/show";
import commander from "./commander";

class Store {
  private readonly _HOME_MENU: string[] = ["목록 조회", "쓰기"];
  private _postList: Post[] = [];
  private _askType: AskType = "HomeMenu";
  private _viewType: ViewType = "View";
  private _writeType: WriteType = "Content";
  private _postToShow: Post = {} as Post;
  private _showPost = false;

  constructor() {
    makeAutoObservable(this);

    reaction(
      () => this._askType,
      () => askQuestion()
    );

    reaction(
      () => this._writeType,
      () => {
        write();
      }
    );

    reaction(
      () => this._showPost,
      () => {
        if (!this._showPost) return;

        if (this._viewType === "Preview") this.addPost(this._postToShow);
        showPost(this._postToShow);
        commander.onEnter();

        this._showPost = false;
      }
    );
  }

  get HOME_MENU() {
    return this._HOME_MENU;
  }

  get postList() {
    return this._postList;
  }

  get askType() {
    return this._askType;
  }

  set askType(askType: AskType) {
    this._askType = askType;
  }

  get viewType() {
    return this._viewType;
  }

  get writeType() {
    return this._writeType;
  }

  set writeType(writeType: WriteType) {
    this._writeType = writeType;
  }

  get postTitles() {
    return this._postList.map((post) => post.title);
  }

  get newPostId() {
    return this._postList.length + 1;
  }

  getMaxAnswerNumber() {
    return this.askType === "HomeMenu"
      ? this._HOME_MENU.length
      : this._postList.length;
  }

  getPost(index: number) {
    return this._postList[index];
  }

  addPost(post: Post) {
    this.postList.push(post);
  }

  configureShowInfo(postToShow: Post, viewType: ViewType) {
    this._postToShow = postToShow;
    this._viewType = viewType;
    this._showPost = true;
  }
}

export const store = new Store();
