import { action } from 'typesafe-actions'
import { TodosTypes, Todo } from './types'

export const addTodo = (data: Todo[]) => action(TodosTypes.ADD_TODO, { data })