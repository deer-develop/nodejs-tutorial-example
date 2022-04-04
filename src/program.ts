import { Context } from "./context";
import { ApplicationState } from "./types";
import { ViewController } from "./controller/ViewController";

interface Program {
  run: (state: ApplicationState) => void;
}

export class ProgramImpl implements Program {
  viewController: ViewController;
  constructor(private context: Context) {
    this.viewController = context.viewController;
    context.eventEmitter.on("state-change", (state: ApplicationState) => {
      this.run(state);
    });
  }

  async run(state: ApplicationState) {
    try {
      switch (state.view) {
        case "SELECT_MENU":
          await this.viewController.renderHome();
          break;
        case "SELECT_POST":
          await this.viewController.renderPostList();
          break;
        case "VIEW_POST":
          this.viewController.renderPostDetail(state.postId || 0);
          break;
        case "CREATE_POST":
          this.viewController.renderCreatePost();
          break;
      }
    } catch (e: any) {
      console.log(e.message);
      this.context.eventEmitter.emit(
        "state-change",
        this.context.store.getState()
      );
    }
  }
}
