import styled from 'styled-components';
import { NavLink } from 'react-router-dom'


export const StyledMenuLink_ID0 = styled(NavLink)`
  display: flex;
  text-decoration: none;
  color: ${({ theme }) => theme.main};
  padding: 12px;
  &:hover {
    color: ${({ theme }) => theme.main};
    background: ${({ theme }) => theme.main};
  }
  &:focus {
    text-decoration: none;
  }
  &.link-active {
    color: ${({ theme }) => theme.main};
  }
`;
