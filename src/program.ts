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
  }

  run(state: ApplicationState) {
    switch (state.view) {
      case "SELECT_MENU":
        this.viewController.renderHome();
        break;
      case "SELECT_POST":
        this.viewController.renderPostList();
        break;
      case "VIEW_POST":
        this.viewController.renderPostDetail(state.postId || 0);
    }
  }
}
