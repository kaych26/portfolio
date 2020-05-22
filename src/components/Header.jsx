import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../assets/icons/kay_logo.png';

const StyledHeader = styled.header`

  height: 100px;
  /* position: relative; */
  /* height: 100px; */
  position: fixed;
  /* z-index: 9999; */
  /* top: 0; */
  width: 100%;
  /* background-color: linear-gradient(rgba(255,255,255 1)); */
  /* background-color: rgba(255,255,255, .5); */
  `;

const HeaderContainer = styled.div`
  /* background-color: yellow; */
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const HeaderImg = styled.img`
  /* padding: 0 1em; */
`;

const NavContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-right: 3em;
`;
const LogoLink = styled(Link)``;

const NavLink = styled(Link)`
  font-size: 16px;
  padding: 1em 1.8em;
  text-decoration: none;
  color: #000;
  background-color: rgba(255,255,255, .8);
  border-radius: 10px;
`;

export default function Header() {
  return (
    <StyledHeader>
      <HeaderContainer>
        <LogoLink to="/">
          <HeaderImg src={logo} />
        </LogoLink>
        <NavContainer>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/Work">Work</NavLink>
          <NavLink to="/Contact">Contact</NavLink>
        </NavContainer>
      </HeaderContainer>
    </StyledHeader>
  );
}
