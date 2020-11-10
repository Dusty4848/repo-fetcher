import styled, { css } from 'styled-components';
import { BoxStyleProps } from './types';

export const Box = styled.div<BoxStyleProps>`
  ${(props) => css`
    display: ${props.display || 'block'};
    position: ${props.position || 'static'};
    margin: ${props.m || '0'};
    padding: ${props.p || '0'};
    width: ${props.width || 'auto'};
    height: ${props.height || 'auto'};
    max-width: ${props.maxWidth || 'none'};
    max-height: ${props.height || 'none'};
    min-height: ${props.minHeight || '0'};
    ${props.minWidth &&
    css`
      min-width: ${props.minWidth || '0'};
    `}

    ${props.display === 'flex' &&
    css`
      flex-direction: ${props.flexDirection || 'row'};
      flex-wrap: ${props.flexWrap || 'nowrap'};
      justify-content: ${props.justifyContent || 'flex-start'};
      align-items: ${props.alignItems || 'flex-start'};
    `};
    ${props.flex &&
    css`
      flex: ${props.flex};
    `};
  `};
`;
