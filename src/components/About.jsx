import React from 'react';
import { useMediaQuery } from 'react-responsive';
import styled, { keyframes } from 'styled-components';
import { jello, flipInY, rotateInDownRight, flip, fadeInUp, fadeInRight, slideInUp, rotateIn, slideInDown, swing, zoomInDown, zoomIn, zoomInUp, slideIn, rotateInDownLeft, slideInLeft, slideInRight, fadeIn } from 'react-animations';

// import { motion, AnimatePresence } from 'framer-motion';
import AboutMoi from './AboutMoi';
import AboutSidebar from './AboutSidebar';
import Logo from './Logo';
import size from './size';

const StyledAbout = styled.section`
  display: grid;
  grid-template-columns: 25% 68%;
  grid-template-rows: 100%;
  font-family: 'Shadows Into Light Two', cursive;

  @media (max-width: ${size.mobile}) {
    grid-template-columns: 1fr;
    grid-template-row: 1fr;
  }
`;

const LogoFrame = styled.div`
position: fixed;
  /* width: 30%; */
`;


const AboutSidebarDiv = styled.div`
  padding-top: 14.5em;

  @media (max-width: ${size.mobile}) {
  }
`;

const AboutMoiDiv = styled.div`
z-index: 2;
  padding-top: 3em;
`;

export default function About() {
  const isMobile = useMediaQuery({ query: `(max-width: ${size.mobile})` });
  return (
    <StyledAbout>
      {/* <Logo/> */}
      {!isMobile &&
        <AboutSidebarDiv>
          <AboutSidebar />
        </AboutSidebarDiv>
      }
      <AboutMoiDiv>
        <AboutMoi />
      </AboutMoiDiv>
    </StyledAbout>
  );
}
