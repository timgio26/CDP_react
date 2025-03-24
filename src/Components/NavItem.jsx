import styled from "styled-components";
import { NavLink } from "react-router";

const NavItemSingle = styled.div`
  margin-top: 3px;
  margin-bottom: 3px;
  margin-left: 5px;
  margin-right: 5px;
  padding-top: 5px;
  padding-bottom: 5px;
  padding-left:12px;
  cursor: pointer;
  /* justify-content:center; */
  gap:5px;
  align-items:center;
  flex-direction:row;
  display:flex;
  border-radius: 999px;
  color:#1f1f1f;
  &:hover {
    background-color: #e3eeff; // <Thing> when hovered
    transition: background-color 0.3s ease-in;
  }
`;

export function NavItem({ children,to}) {
  return (
    <NavLink to={to}>
      <NavItemSingle>
        {children}
      </NavItemSingle>
    </NavLink>
  );
}
