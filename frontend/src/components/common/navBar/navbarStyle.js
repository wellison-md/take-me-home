import styled from "styled-components";

export const NavbarContainer = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-right: 250px;
`;

export const Link = styled.a`
  text-decoration: none;
  transition: 0.2s;
  margin: 0 28px;
  cursor: pointer;

  &:hover {
    color: #8500d3;
    transform: scale(1.05);
  }
`;