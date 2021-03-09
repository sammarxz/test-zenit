import { Reducer } from "redux";
import { TodosState, TodosTypes } from "./types";

const INITIAL_STATE: TodosState = {
  data: [
    {
      id: 1,
      title: "Swipe me to the left",
      note: "Some note here",
      category: "Work",
      date: "from 03/26/21 to 03/27/21",
      completed: true,
    },
  ],
};

const reducer: Reducer<TodosState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TodosTypes.ADD_TODO:
      return {
        data: [...state.data, action.payload.data],
      };
    case TodosTypes.REMOVE_TODO:
      return {
        data: state.data.filter((todo) => todo.id !== action.payload),
      };
    default:
      return state;
  }
};

export default reducer;
