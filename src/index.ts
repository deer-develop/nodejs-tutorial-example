import { ProgramImpl } from "./program";
import { createContext } from "./context";

const context = createContext();
const program = new ProgramImpl(context);
program.run(context.store.getState());
