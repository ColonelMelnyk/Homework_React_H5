import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Header = styled.div`
max-width: 960px;
margin: 0 auto;
padding: 0 16px;
`;

export const NavBlock = styled.header`
display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 8px 0;
  margin-bottom: 8px;
  box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.3);
  > nav {
    display: flex;
  }
`;

export const Link = styled(NavLink)`
padding: 8px 16px;
border-radius: 4px;
text-decoration: none;
color: black;
font-weight: 500;

&.active {
  color: #f20c96;
  background-color: #FFFFF;
}
`;