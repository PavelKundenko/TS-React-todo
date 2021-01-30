import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Dispatch } from 'redux';

import { addTodoItem } from '../../../store/todos/actions';
import { Form } from './form.styles';
import { TodosActionTypes } from '../../../store/todos/action-types';

export const AddItemForm:React.FC = () => {
  const [inputValue, setInputValue] = useState<string>('');
  const dispatch = useDispatch<Dispatch<TodosActionTypes>>();


  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event: React.SyntheticEvent): void => {
    event.preventDefault();
    dispatch(addTodoItem(inputValue));
    setInputValue('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <input type="text" value={inputValue} onChange={handleChange} />
      <button type="submit">Add</button>
    </Form>
  );
};
