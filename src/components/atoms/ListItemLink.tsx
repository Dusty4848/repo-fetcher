import styled from 'styled-components';

export const ListItemLink = styled.a`
  padding: 10px 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  color: inherit;
  text-decoration: none;
  &:hover {
    background-color: ${(props) => props.theme.palette.textSecondary};
  }
`;
