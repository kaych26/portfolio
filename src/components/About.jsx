import React from 'react';
import { Link } from 'react-router-dom';

import styled, { keyframes } from 'styled-components';
import { jello, flipInY, rotateInDownRight, flip, fadeInUp, fadeInRight, slideInUp, rotateIn, slideInDown, swing, zoomInDown, zoomIn, zoomInUp, slideIn, rotateInDownLeft, slideInLeft, slideInRight, fadeIn } from 'react-animations';

// import { motion, AnimatePresence } from 'framer-motion';

import AboutMoi from './AboutMoi';
import AboutSidebar from './AboutSidebar';
import arrow_icon from '../assets/icons/arrow-right.svg';


const StyledAbout = styled.section`
  display: grid;
  grid-template-columns: 25% 56% 10% 9%;
  grid-template-rows: 20% 46% 20%;

  /* display: flex;
  align-items: center;
  justify-content: space-around; */
  font-family: 'Shadows Into Light Two', cursive;
`;

const AboutSidebarDiv = styled.div`
  grid-area: 2/1/2/1;
`;

const AboutMoiDiv = styled.div`
  grid-area: 1/2/3/3;
`;
const AboutArrowDiv = styled.div`
  grid-area: 3/3/3/4;
  align-self: end;
 
`;

const ArrowLink = styled(Link)`
  text-decoration: none;
  color: #1e8ff7;
  font-family: 'Montserrat', sans-serif;


`;

const ArrowImg = styled.img`
width: 3.5em;
`;


const AboutPostItFrame = styled.div`
  /* animation: ${props => props.time} ${keyframes`${fadeIn}`}; */
  /* animation: 2s ${keyframes`${fadeIn}`}; */
  /* display: flex; */
  align-content: space-between;
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
      <AboutArrowDiv>
        <ArrowLink to="/work">
          View Portfolio
          <ArrowImg src={arrow_icon} />
        </ArrowLink>

      </AboutArrowDiv>
    </StyledAbout>
  );
}
