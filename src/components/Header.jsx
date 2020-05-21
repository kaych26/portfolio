import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../assets/icons/kay_logo.png';

const StyledHeader = styled.header`
  height: 100px;
  position: relative;
  height: 100px;
  position: fixed;
  /* z-index: 9999; */
  top: 0;
  width: 100%;
`;

const HeaderContainer = styled.div`
  /* background-color: yellow; */
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const HeaderImg = styled.img`
  padding: 1em 2em;
`;

const NavContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-right: 3em;
`;
const NavLink = styled(Link)`
  font-size: 16px;
  padding: 1.8em;
  text-decoration: none;
  color: #000;
`;


export default function Header() {
  return (
    <StyledHeader>
      <HeaderContainer>
        <HeaderImg src={logo} />
        <NavContainer>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/Work">Work</NavLink>
          <NavLink to="/Contact">Contact</NavLink>
        </NavContainer>
      </HeaderContainer>
    </StyledHeader>
  );
}
