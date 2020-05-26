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
  /* {props.color? color=props.color : color='#000'} */
  /* if (props.color === '') {
    color = 'red';
  }; */

  padding: .3em 1.5em;
  text-decoration: none;
  /* color: ${props => props.color === '' ? props.color : '#000'}; */
  color: ${props => props.color};
  background-color: rgba(252, 251, 248, 0.8);
  border-radius: 10px;
  height: 26px;

  &:hover {
    border: 1px solid #ffa500;

  }
  /* &:active {
    background-color: #545d5c;
  } */
  /* &::visited {
    background-color: pink;
  } */
`;

const NavResume = styled.div`

padding: .3em 1.5em;
  text-decoration: none;
  /* color: ${props => props.color === '' ? props.color : '#000'}; */
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

  // let home, about, work, resume = '#000';

  if (props.location.pathname === '/') {
    home = '#ffa500';
  }
  if (props.location.pathname === '/about') {
    about = '#ffa500';
    // about = '#175be3';
  }
  if (props.location.pathname === '/work') {
    work = '#ffa500';
  }
  if (props.location.pathname === '/resume') {
    resume = '#ffa500';
  }



  return (
    <StyledHeader>
      <HeaderContainer>
        {props.location.pathname !== '/'? (
          <LogoLink to="/">
            <Logo />
          </LogoLink>
        ) : (
            <div />
          )}

        <NavContainer>
          {/* {!home && */}
          <NavLink to="/" color={home}>Home</NavLink>
          {/* } */}
          <NavLink to="/about" color={about}>About</NavLink>
          <NavLink to="/work" color={work}>Work</NavLink>
          <NavLink to="/resume" color={resume}>Resume</NavLink>

          {/* <NavResume> */}

              
          {/* <LinkResume imgOption='no' color={resume}>
            <NavResume color={resume}>
            Resume
            </NavResume>
          </LinkResume> */}
          {/* </NavResume> */}

        </NavContainer>
      </HeaderContainer>
    </StyledHeader>
  );
}
