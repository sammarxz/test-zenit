export enum  TodosTypes {
  ADD_TODO = '@todos/ADD_TODO',
}

export interface Todo {
  id: number;
  title: string;
  note: string;
  category: string;
  date: string;
  completed: boolean;
}


export interface TodosState {
  data: Todo[]
}