import { Commander } from "./Commander";
import { rl } from "./index";

export class Program {
  commander: Commander;
  constructor() {
    this.commander = new Commander(rl);
  }

  run() {
    return;
  }
}
