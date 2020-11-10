import styled from 'styled-components';

export const ErrorMessage = styled.span`
  color: ${(props) => props.theme.palette.alert};
  position: absolute;
  bottom: -15px;
  left: 0;
  font-size: 10px;
`;
