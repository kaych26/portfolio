import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { slideInLeft, slideInDown } from 'react-animations';
import Logo from './Logo';
import size from './size';

const StyledHeader = styled.header`
  height: 80px;
  /* position: relative; */
  /* height: 100px; */
  position: fixed;
  z-index: 99;
  /* top: 0; */
  width: 100%;

  display: grid;
  grid-template-columns: 180px auto;
  
  @media (max-width: ${size.mobile}) {
    grid-template-columns: 414px;
    grid-template-rows: 100px 1fr;
  }
`;

const LogoFrame = styled.div`
@media (max-width: ${size.mobile}) {
  grid-area: 1/2/2/2;
}
`;

const LogoLink = styled(Link)`
  font-family: 'Londrina Shadow', cursive;
  font-size: 2em;
  text-decoration: none;
`;

const NavContainer = styled.div`
grid-area: 1 / 2 / 2 / 2;
justify-self: end;
  height: 60px;
  padding-top: 1.8em;
  font-size: 16px;
  @media (max-width: ${size.mobile}) {
    grid-area: 1/1/3/3;
    place-self: center;
  }
`;

const NavLink = styled(Link)`
  padding: .3em 1.5em;
  text-decoration: none;
  color: ${props => props.color};
  background-color: rgba(252, 251, 248, 0.8);
  border-radius: 10px;
  height: 26px;

  &:hover {
    border: 1px solid #ffa500;
  }
`;

export default function Header(props) {
  let home = '#000';
  let about = '#000';
  let work = '#000';
  let resume = '#000'
  let showLogo = '1';

  if (props.location.pathname === '/') {
    home = '#ffa500';
    showLogo = '0';
  }
  if (props.location.pathname === '/about') {
    about = '#ffa500';
    showLogo = '1';
  }
  if (props.location.pathname === '/work') {
    work = '#ffa500';
    showLogo = '1'
  }
  if (props.location.pathname === '/resume') {
    resume = '#ffa500';
    showLogo = '1'
  }

  return (
    <StyledHeader>

      {/* <HeaderFrame> */}
        {showLogo === '1' &&
          <LogoFrame>
            <LogoLink to="/">
              <Logo />
            </LogoLink>
          </LogoFrame>
        }

        <NavContainer>
          <NavLink to="/" color={home}>Home</NavLink>
          <NavLink to="/about" color={about}>About</NavLink>
          <NavLink to="/work" color={work}>Work</NavLink>
          <NavLink to="/resume" color={resume}>Resume</NavLink>
        </NavContainer>
      {/* </HeaderFrame> */}

    </StyledHeader>
  );
}
