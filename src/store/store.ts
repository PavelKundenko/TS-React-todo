import {applyMiddleware, combineReducers, createStore} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import { todosReducer } from './todos/todos-reducer';
import { localeStorageMiddleware } from './middlewares';

export const rootReducer = combineReducers({
  todos: todosReducer
})

const middlewares = applyMiddleware(localeStorageMiddleware)

export const store = createStore(rootReducer, composeWithDevTools(middlewares));
