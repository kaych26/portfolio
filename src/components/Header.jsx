import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { slideInLeft, slideInDown } from 'react-animations';
// import logo from '../assets/icons/kay_logo.png';
import LinkResume from './LinkResume';
import Logo from './Logo';

const StyledHeader = styled.header`
  height: 100px;
  /* position: relative; */
  /* height: 100px; */
  position: fixed;
  z-index: 999;
  /* top: 0; */
  width: 100%;
  /* background-color: linear-gradient(rgba(255,255,255 1)); */
  /* background-color: rgba(255,255,255, .5); */
`;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  /* align-items: center; */
`;

const NavContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-right: 3em;
  padding-top: 1.8em;
  font-size: 16px;
`;
const LogoLink = styled(Link)`
  font-family: 'Londrina Shadow', cursive;
  /* font-family: 'Arizonia', cursive; */
  /* font-family: 'Fredericka the Great', cursive; */
  font-size: 2em;
  text-decoration: none;
`;

const NavLink = styled(Link)`
  /* font-size: 16px; */
  padding: .3em 1.5em;
  text-decoration: none;
  color: #000;
  background-color: rgba(252, 251, 248, 0.8);
  border-radius: 10px;
  height: 26px;

  &:hover {
    color: #fff;
    background-color: #878d8c
  }
  &:active {
    background-color: #545d5c;
  }
  /* &::visited {
    background-color: pink;
  } */
`;

const NavResume = styled.div`

`;


export default function Header(props) {
  let homePage = 0;

  if (props.location.pathname === '/') {
    homePage = 1;
  }


  return (
    <StyledHeader>
      <HeaderContainer>
        {!homePage ? (
          <LogoLink to="/">
            <Logo />
          </LogoLink>
        ) : (
            <div />
          )}

        <NavContainer>
          {!homePage &&
            <NavLink to="/">Home</NavLink>
          }
          <NavLink to="/about">About</NavLink>
          <NavLink to="/work">Work</NavLink>

          {/* <NavResume> */}

          <LinkResume imgOption='no'>
            Resume
          </LinkResume>
          {/* </NavResume> */}

        </NavContainer>
      </HeaderContainer>
    </StyledHeader>
  );
}
