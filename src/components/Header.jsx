import React from 'react';
import { Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import styled from 'styled-components';
import { slideInLeft, slideInDown } from 'react-animations';
import Logo from './Logo';
import size from './size';

const StyledHeader = styled.header`
  height: 80px;
  position: fixed;
  /* top: 0; */
  width: 100%;

  display: grid;
  grid-template-columns: 180px auto;
  z-index: 99;
  
  @media (max-width: ${size.mobile}) {
    grid-template-columns: 414px;
  }
`;

const NavContainer = styled.div`
  
  grid-area: 1 / 2 / 2 / 2;
  justify-self: end;
  height: 60px;
  padding-top: 1.8em;
  font-size: 16px;
  padding-right: 1em;
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
  const isMobile = useMediaQuery({ query: `(max-width: ${size.mobile})` })
  let home = '#000';
  let about = '#000';
  let work = '#000';
  let resume = '#000'
  let showLogo = '0';

  if (props.location.pathname === '/') {
    home = '#ffa500';
    showLogo = '0';
  }
  else if (props.location.pathname === '/about' && !isMobile) {
    about = '#ffa500';
    showLogo = '1';
  }
  else if (props.location.pathname === '/work' && !isMobile) {
    work = '#ffa500';
    showLogo = '1'
  }
  else if (props.location.pathname === '/resume' && !isMobile) {
    resume = '#ffa500';
    showLogo = '1'
  }
 
  return (
    <StyledHeader>
      {/* <HeaderFrame> */}


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
