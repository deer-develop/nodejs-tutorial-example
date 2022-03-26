export interface Post {
  id: number;
  title: string;
  content: string;
}

export type AskType = "HomeMenu" | "BulletinBoard";
export type WriteType = "Title" | "Content";
export type ViewType = "Preview" | "View";
