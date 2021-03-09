import { createStore, Store } from "redux";

import { TodosState } from "./ducks/todos/types";
import rootReducer from "./ducks/rootReducer";

export interface ApplicationState {
  todos: TodosState;
}

const store: Store<ApplicationState> = createStore(rootReducer);

export default store;
