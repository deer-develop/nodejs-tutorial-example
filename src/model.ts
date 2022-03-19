export enum QuestionPage {
  HOME_MENU = "HomeMenu",
  BULLETIN_BOARD = "BulletinBoard",
}

export enum WriteType {
  TITLE = 'Title',
  CONTENT = 'Content'
}

export enum ViewType {
  PRE_VIEW = "Preview",
  VIEW = "View"
}

export interface Post {
  id: number;
  title: string;
  content: string;
}
