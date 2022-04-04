import { ApplicationState, Entity } from "../types";
import EventEmitter from "events";

export class Store {
  menus: Entity[] = [
    { id: 1, title: "목록 조회" },
    { id: 2, title: "쓰기" },
  ];

  private state: ApplicationState = {
    view: "SELECT_MENU",
  };

  constructor(private eventEmitter: EventEmitter) {}

  public updateState(state: ApplicationState) {
    this.state = state;
    this.eventEmitter.emit("state-change", state);
  }
}
