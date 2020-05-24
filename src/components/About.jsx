import React from 'react';
import styled, { keyframes } from 'styled-components';
import { jello,flipInY,rotateInDownRight, flip, fadeInUp, fadeInRight, slideInUp, rotateIn, slideInDown, swing, zoomInDown, zoomIn, zoomInUp,slideIn, rotateInDownLeft, slideInLeft, slideInRight, fadeIn } from 'react-animations';

import github_icon from '../assets/icons/github_simple.svg';
import linkedin_icon from '../assets/icons/linkedin_simple.svg';
import mail_icon from '../assets/icons/mail_simple.svg';
import resume_icon from '../assets/icons/resume_simple.svg';
// import linkedin_icon from '../assets/icons/linkedin.png';
// import github_icon from '../assets/icons/github_icon.png';

// import { motion, AnimatePresence } from 'framer-motion';
// import resume from '../assets/kayResume.jpg';


import PostIt from './PostIt';
// import resume_icon from '../assets/icons/resume_icon.png';

const StyledAbout = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: 'Shadows Into Light Two', cursive;
`;

const AboutTitle = styled.h1`
  
  /* animation: 2s ${keyframes`${slideInLeft}`}; */
  font-size: 1.5em;
  padding: 2em 0 1em 0;
  /* padding: 2.8em 0 2.5em 0; */
  letter-spacing: .1em;
  font-weight: 600;

`;

const AboutTitle2 = styled(AboutTitle)`
  animation: 2s ${keyframes`${fadeIn}`};
  /* animation: 8s ${keyframes`${rotateIn}`}; */
  padding: 0 0 2em 0;
  font-weight: normal;
  /* transition-delay: 5s;
  transition-duration: 2; */
`;


const AboutPostItFrame = styled.div`
  /* animation: ${props => props.time} ${keyframes`${fadeIn}`}; */
  /* animation: 2s ${keyframes`${fadeIn}`}; */
  display: flex;
  align-content: space-between;
`;

const PostItFrame = styled.div`
  animation: ${props => props.time} ${keyframes`${slideInLeft}`};    
  /* animation: ${props => props.time} ${keyframes`${jello}`};     */
`;
const PostItFrame2 = styled.div`
  animation: ${props => props.time} ${keyframes`${slideInUp}`};    
  /* animation: ${props => props.time} ${keyframes`${jello}`};     */
`;
const PostItFrame3 = styled.div`
  animation: ${props => props.time} ${keyframes`${slideInRight}`};    
  /* animation: ${props => props.time} ${keyframes`${jello}`};     */
`;

const AboutPostItTitle = styled.h3`
text-align: center;
  padding-bottom: .5em;
  font-weight: 800;
  color: #ff69b4;
`;

const AboutPostItList = styled.li`
  padding-bottom: .6em;
`;

const ImgLinkFrame = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-bottom: 13px;
 
`;

const AboutPostItImg = styled.img`
width: 28px;
/* align-self: flex-end; */
`;

const AboutPostItLink = styled.a`
text-decoration: none;
font-size: .8em;
color: #000;
padding-left: .5em;

`;



export default function About() {
  const linkedin_link = 'https://www.linkedin.com/in/kaych26/';
  const github_link = 'https://github.com/kaych26';
  const resume_link = 'https://drive.google.com/file/d/1dgD9TQ2uK9CvewjmYTQ1WXZJHm2dtQZH/view';


  const whoami_1 = 'Hi, I\'m Kay, ';
  const whoami_2 = 'a software engineer and web developer.';
  const title = 'Highlights'
  const aboutMe = [
    'Worked 10+ years in major financial coporations as a Unix C/C++ programmer and manager.',
    'Becoming a mom has inspired me to web development, using React and Javascript.'
    // 'Developed a passion in web development using \'React\' and \'Javascript\' after becoming a mom.'
  ];
  // const aboutMe =
  // 'Worked 10+ years in major financial coporations as a C/C++ programmer and manager. After becoming a mom, inspired and added web development to my passion.';

  const title2 = 'Passions';
  const myPassions = [
    'Enjoy listening and interacting with people.',
    'Love using technology to transform innovative \'ideas\' into \'products\'. ',
    'Keep learning, keep exploring and stay inspired !'
  ];

  const title3 = 'Links...';


  // 'Hi, my name is Kay Chan, a software engineer with 10+ years working as a programmer and manager in major financial corporation. After becoming a mom, I have extended my passion to web development and tranforming ideas to products.';

  // 'Hi, my name is Kay Chan.  I am a versatile Software Engineer who holds 10+ years experience working as a Senior Programmer and Manager for major financial corporations. After becoming a mom, I have extended my passion to web development and inspired to use my skills to make a differences for the commnunity.';

  // const slideInLeft = keyframes`${slideInLeft}`;

  return (
    <StyledAbout>
      <AboutTitle>
        {whoami_1}
      </AboutTitle>
      <AboutTitle2>
        {whoami_2}
      </AboutTitle2>


      <AboutPostItFrame>

        <PostItFrame time='1s'>
          <PostIt rotate='2deg'>
            <AboutPostItTitle>
              {title}
            </AboutPostItTitle>

            {aboutMe.map((message, idx) =>
              <AboutPostItList key={idx}>
                {message}
              </AboutPostItList>)}

          </PostIt>
        </PostItFrame>

        <PostItFrame2 time='2.5s'>
          <PostIt rotate='-2deg'>
            <AboutPostItTitle>
              {title2}
            </AboutPostItTitle>
            {myPassions.map((passion, idx) =>
              <AboutPostItList key={idx}>
                {passion}
              </AboutPostItList>

            )}
          </PostIt>
        </PostItFrame2>

        <PostItFrame3 time='4s'>
          <PostIt rotate='3deg'>
            <AboutPostItTitle>
              {title3}
            </AboutPostItTitle>

            <ImgLinkFrame>

              {/* <AboutPostItLink href="https://drive.google.com/file/d/1dgD9TQ2uK9CvewjmYTQ1WXZJHm2dtQZH/view" target="_blank"> */}
              <AboutPostItLink href={resume_link} target="_blank" rel="noopener noreferrer">
                <AboutPostItImg src={resume_icon} alt='resume' />
              </AboutPostItLink>
              <AboutPostItLink href={resume_link} target="_blank" rel="noopener noreferrer">
                Resume
            </AboutPostItLink>
            </ImgLinkFrame>

            <ImgLinkFrame>
              <AboutPostItLink href="mailto:kaych26@gmail.com">
                <AboutPostItImg src={mail_icon} alt='email' />
              </AboutPostItLink>
              <AboutPostItLink href="mailto:kaych26@gmail.com">
                Email
          </AboutPostItLink>
            </ImgLinkFrame>

            <ImgLinkFrame>
              <AboutPostItLink href={linkedin_link} target="_blank" rel="noopener noreferrer">
                <AboutPostItImg src={linkedin_icon} alt='linkedin' />
              </AboutPostItLink>
              <AboutPostItLink href={linkedin_link} target="_blank" rel="noopener noreferrer">
                www.linkedin.com/in/kaych26/
          </AboutPostItLink>
            </ImgLinkFrame>

            <ImgLinkFrame>
              <AboutPostItLink href={github_link} target="_blank" rel="noopener noreferrer">
                <AboutPostItImg src={github_icon} alt='github' />
              </AboutPostItLink>
              <AboutPostItLink href={github_link} target="_blank" rel="noopener noreferrer">
                www.github.com/kaych26
            </AboutPostItLink>
            </ImgLinkFrame>

          </PostIt>

        </PostItFrame3>
      </AboutPostItFrame>

    </StyledAbout>
  );
}
