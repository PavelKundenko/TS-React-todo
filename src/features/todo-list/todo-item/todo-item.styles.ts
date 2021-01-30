import styled from 'styled-components';

export const ItemText = styled.p`
  font-size: 18px;
  font-style: italic;
  color: #fff;
`;

export const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
`;

const Button = styled.button`
  display: block;
  
  background-color: transparent;
  border: none;
  font-size: 20px;
  cursor: pointer;
  transition: .2s;

  &:hover {
    transform: scale(1.4);
  }

  &:focus {
    outline: 0;
  }
`;

export const DoneButton = styled(Button)`
  color: #00CC00;
`;

export const RemoveButton = styled(Button)`
  color: #CC0000;
`;
