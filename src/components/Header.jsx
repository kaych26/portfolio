import React from 'react';
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
  /* display: flex;
  justify-content: space-between;
  align-items: center; */
`;

const HeaderContainer = styled.div`
  /* background-color: yellow; */
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const HeaderImg = styled.img`
  padding: 1em 2em;
  /* width: 100px;
  height: 100px; */
`;

const NavContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-right: 3em;
`;

const HeaderNav = styled.nav`
  font-size: 16px;
  padding: 1.8em;
`;

export default function Header() {
  return (
    <StyledHeader>
      <HeaderContainer>
        <HeaderImg src={logo} />
        <NavContainer>
          <HeaderNav>About</HeaderNav>
          <HeaderNav>Work</HeaderNav>
          <HeaderNav>Contact</HeaderNav>
        </NavContainer>
      </HeaderContainer>
    </StyledHeader>
  );
}
