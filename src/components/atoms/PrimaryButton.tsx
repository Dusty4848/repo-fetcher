import styled, { css } from 'styled-components';

export const PrimaryButton = styled.button`
  font-family: 'Montserrat', sans-serif;
  padding: 0 20px;
  cursor: pointer;
  color: ${(props) => props.theme.palette.white};
  background-color: ${(props) => props.theme.palette.primary.main};
  height: 35px;
  border: none;
  border-radius: ${(props) => props.theme.borderRadius};
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14),
    0px 1px 5px 0px rgba(0, 0, 0, 0.12);
  &:hover,
  &:focus {
    background-color: ${(props) => props.theme.palette.primary.light};
  }

  ${(props) =>
    props.disabled &&
    css`
      color: rgba(0, 0, 0, 0.26);
      box-shadow: none;
      background-color: rgba(0, 0, 0, 0.12);
      cursor: default;
      pointer-events: none;
    `}
`;
