import { StateI, TodoItemInterface } from '../../interfaces/interfaces';

export const todosSelector = (state: StateI): Array<TodoItemInterface> => state.todos.todos
