import React from 'react';
import styled, { keyframes } from 'styled-components';
import { merge, bounceInLeft, zoomInRight, flip, wobble, flipInX, slideInLeft, slideInRight, rollIn, tada, zoomInDown, fadeInDownBig, fadeIn } from 'react-animations';
import Quote from './Quote';

const StyledHome = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* align-self: center; */
  align-content: center;
  /* display: absolute; */
`;

const HomeTitle = styled.h1`
  /* animation: .3s ${keyframes`${fadeIn}`}; */
  font-family: 'Fredericka the Great', cursive;
  font-size: 3em;
  padding: 1em;
  letter-spacing: 0.2em;
  text-align: center;
`;

const HomeSubTitleFrame = styled.div`
  display: flex;
`;

const slideFlip = merge(slideInLeft, flip)

const HomeSubTitle = styled.h2`
  animation: ${props => props.time} ${keyframes`${zoomInRight}`};
  /* animation: 2s ${keyframes`${slideInLeft}`}; */
  /* animation: 2s ${keyframes`${slideInLeft}`}; */
  font-family: 'Josefin Sans', sans-serif;
  font-size: 1.3em;
  letter-spacing: 0.1em;
`;

export default function Home(props) {
  // debugger
  return (
    <StyledHome>
      <HomeTitle>Kay Chan</HomeTitle>
      <HomeSubTitleFrame>

        <HomeSubTitle time='1s'>
          Software Engineer | &nbsp;
      </HomeSubTitle>
        <HomeSubTitle time='3s'>
          Web Developer | &nbsp;
      </HomeSubTitle>
        <HomeSubTitle time='5s'>
          Finance Techology
      </HomeSubTitle>
      </HomeSubTitleFrame>
      <Quote />
    </StyledHome>
  );
}
