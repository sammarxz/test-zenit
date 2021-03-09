/**
 * Action types
 */
export enum  TodosTypes {
  ADD_TODO = '@todos/ADD_TODO',
}

/**
 * Data types
 */
export interface Todo {
  id: number;
  title: string;
  note: string;
  category: string;
  date: string;
  completed: boolean;
}

/**
 * State type
 */
export interface TodosState {
  data: Todo[]
}