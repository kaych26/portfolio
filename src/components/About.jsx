import React from 'react';
import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import { jello, flipInY, rotateInDownRight, flip, fadeInUp, fadeInRight, slideInUp, rotateIn, slideInDown, swing, zoomInDown, zoomIn, zoomInUp, slideIn, rotateInDownLeft, slideInLeft, slideInRight, fadeIn } from 'react-animations';

// import { motion, AnimatePresence } from 'framer-motion';
import AboutMoi from './AboutMoi';
import AboutSidebar from './AboutSidebar';

const StyledAbout = styled.section`
  display: grid;
  grid-template-columns: 28% 58% 4% 5%;
  grid-template-rows: 8% 72% 20%;

  font-family: 'Shadows Into Light Two', cursive;
  padding-top: 1.5em;
`;

const AboutSidebarDiv = styled.div`
  padding-top: 1.5em;
  grid-area: 2/1/3/2;
`;

const AboutMoiDiv = styled.div`
  grid-area: 1/2/3/2;
  justify-self: center;
`;

export default function About() {

  return (
    <StyledAbout>
      <AboutSidebarDiv>
        <AboutSidebar />
      </AboutSidebarDiv>
      <AboutMoiDiv>
        <AboutMoi />
      </AboutMoiDiv>
    </StyledAbout>
  );
}
