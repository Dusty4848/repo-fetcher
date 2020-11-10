import styled, { css } from 'styled-components';
import { ImageStyleProps } from './types';

export const Image = styled.img<ImageStyleProps>`
  ${(props) =>
    props.width &&
    css`
      width: ${props.width};
    `};
`;
