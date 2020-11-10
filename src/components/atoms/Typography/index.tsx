import styled, { css } from 'styled-components';
import { TypographyStyleProps } from './types';

export const Typography = styled.p<TypographyStyleProps>`
  font-family: 'Montserrat', sans-serif;
  ${(props) => {
    switch (props.as) {
      case 'h1':
        return css`
          font-weight: 600;
          font-size: 2rem;
          margin: 10px 0;
        `;

      case 'h2':
        return css`
          font-weight: 600;
          font-size: 1.5rem;
          margin: 8px 0;
        `;

      case 'h3':
        return css`
          font-weight: 600;
          font-size: 1.2rem;
          margin: 8px 0;
        `;

      case 'span':
        return css`
          font-weight: 400;
          font-size: 0.7rem;
          margin: 0;
          padding: 0;
        `;

      default:
        return css`
          font-weight: 400;
          font-size: 1rem;
          margin: 10px 0;
        `;
    }
  }};

  text-align: ${(props) => props.align || 'left'};
`;
