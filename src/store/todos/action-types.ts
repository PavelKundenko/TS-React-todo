export const ADD_TODO_ITEM = 'TODO_LIST/ADD_TODO_ITEM';
export const DONE_TODO_ITEM = 'TODO_LIST/DONE_TODO_ITEM';
export const REMOVE_TODO_ITEM = 'TODO_LIST/REMOVE_TODO_ITEM';

type AddItemActionPayload = {
  data: string
};

type DoneItemActionPayload = {
  id: number
};

type RemoveItemActionPayload = {
  id: number
}

export interface AddItemAction {
  type: typeof ADD_TODO_ITEM
  payload: AddItemActionPayload
}

export interface DoneItemAction {
  type: typeof DONE_TODO_ITEM
  payload: DoneItemActionPayload
}

export interface RemoveItemAction {
  type: typeof REMOVE_TODO_ITEM
  payload: RemoveItemActionPayload
}

export type TodosActionTypes = AddItemAction | DoneItemAction | RemoveItemAction


