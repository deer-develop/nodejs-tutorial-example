import { Item } from "./types/Item";

export class Menu implements Item {
  id: number;
  title: string;
  constructor(id: number, title: string) {
    this.id = id;
    this.title = title;
  }
  select() {
    console.log("This is Menu");
  }
}
