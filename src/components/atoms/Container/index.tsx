import styled, { css } from 'styled-components';
import { ContainerStyleProps } from './types';

export const Container = styled.div<ContainerStyleProps>`
  height: 100%;
  display: flex;
  flex-flow: column wrap;
  overflow-x: scroll;
  padding: 30px 0;
  background-color: ${(props) => props.theme.palette.appBackground};
  ${(props) =>
    props.centerContent &&
    css`
      align-items: center;
    `};
`;
