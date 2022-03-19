export enum QuestionPage {
  HOME_MENU = "HomeMenu",
  BULLETIN_BOARD = "BulletinBoard",
}

export interface Post {
  id: number;
  title: string;
  content: string;
}
