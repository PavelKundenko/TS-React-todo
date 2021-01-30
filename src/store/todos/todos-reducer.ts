import {TodosState} from '../../interfaces/interfaces';
import {ADD_TODO_ITEM, DONE_TODO_ITEM, REMOVE_TODO_ITEM, TodosActionTypes} from './action-types';

const INITIAL_STATE: TodosState = {
  todos: JSON.parse(localStorage.getItem('todos') || '') || [],
};


export const todosReducer = (state: TodosState = INITIAL_STATE, action: TodosActionTypes): TodosState => {
  switch (action.type) {
    case ADD_TODO_ITEM:
      return {
        ...state,
        todos: [{
          id: Date.now(),
          text: action.payload.data,
          done: false
        }, ...state.todos]
      };

    case DONE_TODO_ITEM:
      return {
        ...state,
        todos: state.todos.map((item) => item.id === action.payload.id ? ({ ...item, done: true }) : item)
      }

    case REMOVE_TODO_ITEM:
      return {
        ...state,
        todos: state.todos.filter((item) => item.id !== action.payload.id)
      }

    default:
      return state;
  }
};
