import React from 'react';
import styled, { keyframes } from 'styled-components';
import AboutSidebar from './AboutSidebar';
import ResumeSummary from './ResumeSummary';

const StyledResume = styled.section`
  display: grid;
  grid-template-columns: 28% 58%;
  grid-template-rows: 37% 43% 20%;
  /* grid-template-rows: 20% 46% 20%; */

  font-family: 'Shadows Into Light Two', cursive;
  /* padding-top: 1.5em; */
`;

const AboutSidebarDiv = styled.div`
  /* padding-top: 1.5em; */
  /* grid-area: 2/1/3/2; */
  padding-top: 6em;
  z-index: 999;
`;

const ResumeSummaryDiv = styled.div`
  /* grid-area: 1/2/3/3; */
`;

export default function Resume() {
  return (

    <StyledResume >
      <AboutSidebarDiv>
        <AboutSidebar />
      </AboutSidebarDiv>
      <ResumeSummaryDiv>
        <ResumeSummary />
      </ResumeSummaryDiv>
    </StyledResume>
  )
}