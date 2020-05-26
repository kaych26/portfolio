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
  grid-template-rows: 20% 46% 20%;

  font-family: 'Shadows Into Light Two', cursive;
  padding-top: 1.5em;
`;

const AboutSidebarDiv = styled.div`
  grid-area: 2/1/2/1;
`;

const AboutMoiDiv = styled.div`
  grid-area: 1/2/3/3;
`;

export default function About() {

  // const title = 'To Do';
  // const myPassions = [
  //   'Keep hacking, keep exploring & stay inspired!'
  // ];

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
