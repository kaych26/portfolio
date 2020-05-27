import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { slideInLeft, slideInDown } from 'react-animations';
import Logo from './Logo';

const size = {
  mobile: '414px',
  tablet: '768px',
};

const StyledHeader = styled.header`
  height: 80px;
  /* position: relative; */
  /* height: 100px; */
  position: fixed;
  z-index: 999;
  /* top: 0; */
  width: 100%;

  /* display: grid;
  grid-column-start: 180px auto; */

  display: grid;
  grid-template-columns: 180px auto;
  /* justify-items: end; */
  /* align-content: space-between; */

  /* display: flex; */
  /* justify-content: space-between; */
  /* justify-content: space-between; */
  /* background-color: linear-gradient(rgba(255,255,255 1)); */
  /* background-color: rgba(255,255,255, .5); */
  /* @media (max-width: ${size.mobile}) {
    flex-direction: column;
  } */
`;
// const HeaderFrame = styled.div`
//   display: grid;
//   grid-template-columns: 180px auto;
// `;


const LogoFrame = styled.div``;

const LogoLink = styled(Link)`
  font-family: 'Londrina Shadow', cursive;
  font-size: 2em;
  text-decoration: none;
`;

const NavContainer = styled.div`
grid-area: 1 / 2 / 2 / 3;
justify-self: end;
  /* align-self: flex-end; */
  /* align-items: end; */
  height: 60px;
  padding-top: 1.8em;
  font-size: 16px;
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
    showLogo = '0';
  }
  if (props.location.pathname === '/work') {
    work = '#ffa500';
    showLogo = '1'
  }
  if (props.location.pathname === '/resume') {
    resume = '#ffa500';
    showLogo = '0'
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
