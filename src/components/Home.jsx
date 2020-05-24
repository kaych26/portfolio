import React from 'react';
import styled, { keyframes } from 'styled-components';
import { slideInLeft, tada, zoomInDown, fadeInDownBig} from 'react-animations';
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
  animation: .5s ${keyframes`${fadeInDownBig}`};
  font-family: 'Fredericka the Great', cursive;
  font-size: 3em;
  padding: 1em;
  letter-spacing: 0.2em;
  text-align: center;
`;

const HomeSubTitle = styled.h2`
  animation: 1s ${keyframes `${slideInLeft}`};
  font-family: 'Josefin Sans', sans-serif;
  font-size: 1.3em;
  letter-spacing: 0.1em;
`;

export default function Home(props) {
  // debugger
  return (
    <StyledHome>
      <HomeTitle>Kay Chan</HomeTitle>
      <HomeSubTitle>
        Software Engineer | Web Developer | Finance Techology
      </HomeSubTitle>
      <Quote />
    </StyledHome>
  );
}
