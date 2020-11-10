import styled from 'styled-components';

export const Input = styled.input`
  height: 35px;
  width: 100%;
  border-radius: 5px;
  border: 1px solid ${(props) => props.theme.borderColor};

  &:focus,
  &:hover {
    border: 1px solid ${(props) => props.theme.palette.black};
    outline: none;
  }
`;
