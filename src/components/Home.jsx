import React from 'react';
import styled from 'styled-components';

const StyledHome = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 38px;
`;

const HomeTitle = styled.h1`
  font-size: 1em;
  padding: 1em;
  letter-spacing: .2em;
`;

const HomeJob = styled.h2`
  font-size: .6em;
  letter-spacing: .1em;
`;


export default function Home() {
  return (
    <StyledHome>
      <HomeTitle>Kay Chan</HomeTitle>
      <HomeJob> Senior Engineer | Web Developer | Finance Techology</HomeJob>
    </StyledHome>
  );
}
