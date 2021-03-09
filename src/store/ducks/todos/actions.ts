/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { action } from "typesafe-actions";
import { TodosTypes, Todo } from "./types";

export const addTodo = (data: Todo) => action(TodosTypes.ADD_TODO, { data });

export const removeTodo = (id: number) => action(TodosTypes.REMOVE_TODO, id);
