import {
  ADD_TODO_ITEM,
  AddItemAction,
  DONE_TODO_ITEM,
  DoneItemAction,
  REMOVE_TODO_ITEM,
  RemoveItemAction
} from './action-types';

export const addTodoItem = (data: string): AddItemAction => ({
  type: ADD_TODO_ITEM,
  payload: {
    data,
  }
});

export const doneTodoItem = (id: number): DoneItemAction => ({
  type: DONE_TODO_ITEM,
  payload: {
    id,
  }
});

export const removeTodoItem = (id: number): RemoveItemAction => ({
  type: REMOVE_TODO_ITEM,
  payload: {
    id,
  }
});
