import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavStyled = styled.nav`
  top: 0;
  left: 0;
  position: sticky;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  height: 85px;
  font-size: 30px;
  font-weight: bold;
  color: #fff;
  background-color: rgba(191, 122, 158, 0.8);
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;

export const NavLinkStyled = styled(NavLink)`
  color: #fff;
  &.active {
    color: rgba(0, 0, 0, 0.85);
  }
`;
