import styled, { css } from 'styled-components';
import { IconButtonStyleProps } from './types';

export const IconButton = styled.button<IconButtonStyleProps>`
  flex: 0 0 auto;
  display: flex;
  color: rgba(0, 0, 0, 0.54);
  padding: 12px;
  overflow: visible;
  font-size: 1.5rem;
  text-align: center;
  transition: background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  border-radius: 50%;
  border: none;
  background-color: transparent;
  cursor: pointer;
  ${(props) =>
    props.edge === 'left'
      ? css`
          margin-left: -12px;
        `
      : props.edge === 'right'
      ? css`
          margin-right: -12px;
        `
      : null}
  &:hover,
  &:focus {
    background-color: rgba(0, 0, 0, 0.04);
    outline: none;
  }
  ${(props) =>
    props.disabled &&
    css`
      background-color: transparent;
      cursor: default;
      pointer-events: none;
    `}
`;
