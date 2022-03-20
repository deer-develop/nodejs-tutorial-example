import { Item } from "./types/Item";

export class Post implements Item {
  id: number;
  title: string;
  content: string;
  constructor(id: number, title: string, content: string) {
    this.id = id;
    this.title = title;
    this.content = content;
  }
  select() {
    console.log("This is Post");
  }
}
