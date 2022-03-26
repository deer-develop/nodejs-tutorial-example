import { Post, AskType, ViewType, WriteType } from "./model";

class Store {
  private readonly _HOME_MENU: string[];
  private _postList: Post[];
  private _askType: AskType;
  private _viewType: ViewType;
  private _writeType: WriteType;

  constructor() {
    this._HOME_MENU = ["목록 조회", "쓰기"];
    this._postList = [];
    this._askType = "HomeMenu";
    this._viewType = "View";
    this._writeType = "Title";
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

  set viewType(viewType: ViewType) {
    this._viewType = viewType;
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
}

const store = new Store();

export default store;
