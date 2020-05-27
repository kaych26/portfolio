import React from 'react';
import { useMediaQuery } from 'react-responsive';
import styled, { keyframes } from 'styled-components';
import AboutSidebar from './AboutSidebar';
import ResumeSummary from './ResumeSummary';
import size from './size';

const StyledResume = styled.section`
  display: grid;
  grid-template-columns: 25% 68%;
  grid-template-rows: 37% 43% 20%;
  /* grid-template-rows: 20% 46% 20%; */

  font-family: 'Shadows Into Light Two', cursive;
  @media (max-width: ${size.mobile}) {
    /* height: 2000px; */
    grid-template-columns: 1fr;
    grid-template-row: 1fr;
  }
`;

const AboutSidebarDiv = styled.div`
  padding-top: 7em;
  z-index: 999;
`;

const ResumeSummaryDiv = styled.div`
  padding: 2em 1em;

  @media (max-width: ${size.mobile}) {
    padding-top: 3.1em;
  }
`;

export default function Resume() {
  const isMobile = useMediaQuery({ query: `(max-width: ${size.mobile})` })
  return (

    <StyledResume >
      {!isMobile &&
        <AboutSidebarDiv>
          <AboutSidebar />
        </AboutSidebarDiv>
      }
      <ResumeSummaryDiv>
        <ResumeSummary />
      </ResumeSummaryDiv>
    </StyledResume>
  )
}