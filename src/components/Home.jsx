import React from 'react';
import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import { merge, bounceInLeft, zoomInRight, flip, wobble, flipInX, slideInLeft, slideInRight, rollIn, tada, zoomInDown, fadeInDownBig, fadeIn } from 'react-animations';
import Quote from './Quote';
import InfoLinks from './InfoLinks';
import size from './size';


const StyledHome = styled.section`
  padding-top: 2em;
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  /* display: absolute; */
`;

const HomeTitleLink = styled(Link)`
  font-family: 'Fredericka the Great', cursive;
  font-size: 3.9em;
    
  padding: 2em 0 .5em 0;
  letter-spacing: 0.2em;
  text-align: center;
  text-decoration: none;
  color: black;
  z-index: 999;

  @media (max-width: ${size.mobile}) {
    font-size: 2.3em;
    padding: 2.8em 0 .6em 0;

  }
`;

const HomeSubTitleFrame = styled.div`
  display: flex;
`;

const HomeSubTitle = styled.h2`
  animation: ${props => props.time} ${keyframes`${zoomInRight}`};
  font-family: 'Josefin Sans', sans-serif;
  font-size: 1.3em;
  letter-spacing: 0.1em;
  padding-bottom: 1.5em;
  @media (max-width: ${size.mobile}) {
    font-size: .8em;
    padding-bottom: .9em;
  }
`;

export default function Home(props) {
  return (
    <>
      <StyledHome>
        <HomeTitleLink to="/about">Kay Chan</HomeTitleLink>
        <HomeSubTitleFrame>
          <HomeSubTitle time='1s'>
            Software Engineer |&nbsp;
      </HomeSubTitle>
          <HomeSubTitle time='2s'>
            Web Developer |&nbsp;
      </HomeSubTitle>
          <HomeSubTitle time='3s'>
            Finance Techology
      </HomeSubTitle>
        </HomeSubTitleFrame>

        <InfoLinks />
        <Quote />
      </StyledHome>
    </>
  );
}
