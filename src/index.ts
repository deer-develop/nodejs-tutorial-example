import { ProgramImpl } from "./program";
import { createContext } from "./context";
import { ApplicationState } from "./types";

const context = createContext();
const program = new ProgramImpl(context);
program.run(context.store.getState());
