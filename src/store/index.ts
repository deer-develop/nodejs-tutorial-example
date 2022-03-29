import { Entity } from "../types";

export class Store {
  menus: Entity[] = [
    { id: 1, title: "목록 조회" },
    { id: 2, title: "쓰기" },
  ];

  get menuSize(): number {
    return this.menus.length || 0;
  }
}
