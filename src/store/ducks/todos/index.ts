import { Reducer } from 'redux'
import { TodosState, TodosTypes } from './types'

const INITIAL_STATE: TodosState = {
  data: [
    {
      id: 1,
      title: 'Swipe me to the left',
      note: 'Some note here',
      category: 'Work',
      date: 'Mar, 06, 2021',
      completed: true,
    }
  ]
}

const reducer: Reducer<TodosState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TodosTypes.ADD_TODO:
      console.log(state)
      return state
    default:
      return state
  }
}

export default reducer