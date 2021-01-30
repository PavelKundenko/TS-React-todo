import { TodosActionTypes } from '../store/todos/action-types';

export interface TodoItemInterface {
  id: number,
  text: string,
  done: boolean
}

export interface TodosState {
  todos: TodoItemInterface[];
}

export interface StateI {
  todos: TodosState
}

export type AppActions = TodosActionTypes;
