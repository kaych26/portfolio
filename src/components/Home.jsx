import React from 'react';
import styled from 'styled-components';

const StyledHome = styled.section``;

const HomeTitle = styled.h1`
  font-size: 3em;
  padding: 1em;
  letter-spacing: 0.2em;
  text-align: center;im
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
