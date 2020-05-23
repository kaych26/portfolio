import React, { useState } from 'react';
import styled from 'styled-components';

// import { motion, AnimatePresence } from 'framer-motion';
// import resume from '../assets/kayResume.jpg';


import PostIt from './PostIt';
import resume_icon from '../assets/icons/resume_icon.png';

const StyledAbout = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* align-self: center; */
  justify-content: center;
`;
const AboutMyself = styled.p`
  /* width: 70%; */
  font-family: 'Shadows Into Light Two', cursive;
  text-align: center;
  padding: 0 6em;
  font-size: 1.3em;
  line-height: 1.5em;
  letter-spacing: .1em;
`;

const AboutMore = styled.a`
  padding: 1em;
  text-decoration: none;
  color: #000;
  cursor: pointer;
`;
const AboutResume = styled.img``;

export default function About() {
  const aboutMe =
    'Hi, my name is Kay Chan, a software engineer with 10+ years working as a programmer and manager in major financial corporation. After becoming a mom, I have extended my passion to web development and tranforming ideas to products. ';
  
  
    // 'Hi, my name is Kay Chan, a software engineer with 10+ years working as a programmer and manager in major financial corporation. After becoming a mom, I have extended my passion to web development and tranforming ideas to products.';

  // 'Hi, my name is Kay Chan.  I am a versatile Software Engineer who holds 10+ years experience working as a Senior Programmer and Manager for major financial corporations. After becoming a mom, I have extended my passion to web development and inspired to use my skills to make a differences for the commnunity.';

  return (
    <StyledAbout>
      <PostIt></PostIt>
      <AboutMyself>{aboutMe}</AboutMyself>
      <AboutMore
        href="https://drive.google.com/file/d/1dgD9TQ2uK9CvewjmYTQ1WXZJHm2dtQZH/view"
        target="_blank"
      >
        <AboutResume src={resume_icon} alt="resume" />
      </AboutMore>
    </StyledAbout>
  );
}
