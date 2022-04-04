import { ProgramImpl } from "./program";
import { createContext } from "./context";
import { ApplicationState } from "./types";

const context = createContext();
const program = new ProgramImpl(context);

context.eventEmitter.on("state-change", (state: ApplicationState) => {
  program.run(state);
});
