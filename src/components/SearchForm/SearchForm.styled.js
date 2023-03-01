import styled from 'styled-components';

export const FormStyled = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 15px;
  gap: 5px;
`;

export const InputStyled = styled.input`
  border-radius: 5px;
  font-size: 20px;
  color: rgba(191, 122, 158, 0.8);
  background-color: #fff;
  border: 1px solid #bdbdbd;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &::placeholder {
    font-size: 20px;
  }
  &:focus,
  &:hover {
    color: rgba(191, 122, 158, 0.8);
    background-color: #fff;
    border-color: rgba(191, 122, 158, 0.8);
  }
`;

export const ButtonStyled = styled.button`
  width: 100px;
  font-size: 20px;
  cursor: pointer;
  border-radius: 5px;
  border: 1px solid #bdbdbd;
  background-color: #fff;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    color: #fff;
    background-color: rgba(191, 122, 158, 0.8);
  }
`;
