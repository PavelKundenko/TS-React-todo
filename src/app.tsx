import React from 'react';

import { TodoList } from './features/todo-list/todo-list';
import { Wrapper } from './app.styles';

const App: React.FC = () => (
  <Wrapper>
    <TodoList />
  </Wrapper>
);


export default App;
