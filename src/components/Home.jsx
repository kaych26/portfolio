import React from 'react';
import styled from 'styled-components';

const StyledHome = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* align-self: center; */
  align-content: center;
  /* display: absolute; */
`;

const HomeTitle = styled.h1`
  font-size: 3em;
  padding: 1em;
  letter-spacing: 0.2em;
  text-align: center;
`;
const HomeSubTitle = styled.h2`
  font-size: 1.2em;
  letter-spacing: 0.1em;
`;

export default function Home() {
  return (
    <StyledHome>
      <HomeTitle>Kay Chan</HomeTitle>
      <HomeSubTitle>
        Software Engineer | Web Developer | Finance Techology
      </HomeSubTitle>
    </StyledHome>
  );
}
