import React from 'react';
import styled from 'styled-components';

const StyledHome = styled.section`
  /* display: flex;
  flex-direction: column;
  align-items: center; */
  height: 60%;
  font-size: 38px;
  display: grid;
grid-template-rows: auto;
align-items: center;


  /* background-color: yellow; */
  /* margin-top: 200px; */

  /* min-height: 100vh;
  overflow: hidden;
  display: relative;
  padding-bottom: 100px; */

`;

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const HomeTitle = styled.h1`
  font-size: 1em;
  padding: 1em;
  letter-spacing: 0.2em;
`;

const HomeJob = styled.h2`
  font-size: 0.5em;
  letter-spacing: 0.1em;
`;

export default function Home() {
  return (
    <StyledHome>
      <HomeContainer>
        <HomeTitle>Kay Chan</HomeTitle>
        <HomeJob> Senior Engineer  |  Web Developer  |  Finance Techology</HomeJob>
      </HomeContainer>
    </StyledHome>
  );
}
