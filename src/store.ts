import { Post, QuestionPage } from './model';

class Store {
  private readonly _HOME_MENU: string[];
  private _postList: Post[];

  constructor() {
    this._HOME_MENU = ["목록 조회", "쓰기"];
    this._postList = [];
  }

  get HOME_MENU() { return this._HOME_MENU };

  get postList() { return this._postList };

  get postTitles() {
    return this._postList.map((post) => post.title);
  }

  get newPostId() {
    return this._postList.length + 1;
  }

  set postList(postList: Post[]) {
    this._postList = postList;
  }

  getMaxAnswerNumber(page: QuestionPage) {
    return page === QuestionPage.HOME_MENU 
      ? this._HOME_MENU.length
      : this._postList.length;
  }

  getPost(index: number) {
    return this._postList[index];
  }
}

const store = new Store();

export default store;