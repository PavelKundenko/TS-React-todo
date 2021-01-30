import styled from 'styled-components';

export const Form = styled.form`
  input {
    box-sizing: border-box;
    width: 90%;
    font-size: 16px;
    padding: 5px;
    border-radius: 5px 0 0 5px;
    border-style: solid;
    
    &:focus {
      outline: none;
    }
  }

  button {
    width: 10%;
    border-radius: 0 5px 5px 0;
    font-size: 16px;
    padding: 5px;
    height: 100%;
    border-style: solid;
    box-sizing: border-box;
    cursor: pointer;
    border-width: 2px 2px 2px 0;
    
    &:focus {
      outline: none;
    }
  }
`;
