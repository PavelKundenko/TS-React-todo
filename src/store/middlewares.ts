import { AppActions, StateI } from '../interfaces/interfaces';
import { Dispatch } from 'redux';

interface StoreI {
  dispatch: Dispatch;
  getState: () => StateI
}

export const localeStorageMiddleware = (store: StoreI) => (next: Dispatch) => (action: AppActions) => {
  const result = next(action);
  const todos = store.getState().todos.todos;

  localStorage.setItem('todos', JSON.stringify(todos));

  return result;
}
