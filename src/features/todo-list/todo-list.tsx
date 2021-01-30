import React from 'react';
import { useSelector, shallowEqual } from 'react-redux';

import { TodoItem } from './todo-item/todo-item';
import { StateI, TodoItemInterface } from '../../interfaces/interfaces';
import { Container, List, EmptyList } from './todo-list.styles';
import { AddItemForm } from './form/form';
import { todosSelector } from '../../store/todos/selectors';

export const TodoList: React.FC = () => {
  const todos = useSelector<StateI, Array<TodoItemInterface>>(todosSelector, shallowEqual)

  return (
    <Container>
      <AddItemForm />
      {
        todos.length ?
          (<List>
            {
              todos
                .sort((prevItem, currentItem) => Number(prevItem.done) - Number(currentItem.done))
                .map(({ id, done, text }, index) => <TodoItem key={id} text={text} done={done} id={id} index={index} />)
            }
          </List>)
          :
          <EmptyList>There are no items yet. Try to add one!</EmptyList>
      }

    </Container>
  );
};
