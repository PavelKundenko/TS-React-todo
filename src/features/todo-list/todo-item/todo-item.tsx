import React, { Dispatch } from 'react';
import { useDispatch } from 'react-redux';

import { TodoItemInterface } from '../../../interfaces/interfaces';
import { RemoveButton, ListItem, ItemText, DoneButton } from './todo-item.styles';
import { doneTodoItem, removeTodoItem } from '../../../store/todos/actions';
import { TodosActionTypes } from '../../../store/todos/action-types';

interface TodoItemElementI extends TodoItemInterface {
  index: number
}

export const TodoItem: React.FC<TodoItemElementI> = ({text, done, id, index}) => {
  const dispatch = useDispatch<Dispatch<TodosActionTypes>>();

  const handleDone = (): void => {
    dispatch(doneTodoItem(id));
  }

  const handleRemove = (): void => {
    dispatch(removeTodoItem(id));
  }

  return (
    <ListItem>
      <ItemText>{index + 1}.{done ? <s>{text}</s> : text}</ItemText>
      {
        done ?
          <RemoveButton onClick={handleRemove} type="button">&#10006;</RemoveButton> :
          <DoneButton onClick={handleDone} type="button">&#10004;</DoneButton>
      }
    </ListItem>
  );
}
