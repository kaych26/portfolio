import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import * as Scroll from 'react-scroll';
import { jello, flash, bounce, flipInY, rotateInDownRight, flip, fadeInRight, slideInUp, rotateIn, slideInDown, swing, zoomInDown, zoomIn, zoomInUp, slideIn, rotateInDownLeft, slideInLeft, slideInRight, fadeIn } from 'react-animations';

import LinkResume from './LinkResume';
import size from './size';

const StyledAboutMoi = styled.section`
  /* animation: 2s ${keyframes`${slideInDown}`}; */
  display: flex;
  flex-direction: column;
  background-image: linear-gradient(rgba(246, 244, 241, 0.3), rgba(205, 205, 203, 0.3));

  font-family: 'Montserrat', sans-serif;
  letter-spacing: .03em;
  padding: 1em;
  border-radius: 10px;
`;

const HelloDiv = styled.div`
  animation: 1s ${keyframes`${slideInDown}`};
`;

const Hello = styled.h1`
  /* color: #1e8ff7; */
  color: #ff69b4;
  font-size: 1.1em;
  font-weight: bold;
  letter-spacing: .1em;
`;

const Name = styled.h1`
  color: #3a4140;
  font-size: 3em;
  font-weight: bold;
  padding: .5em 0;

`;

const Title = styled.h1`
  color: #191b1b;
  font-size: 1.9em;
  padding-bottom: .7em;
`;

const AboutMeOuterDiv = styled.div`
  height: 400px;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 60px;
  overflow: hidden;
`;

const AboutMeDiv = styled.div`

`;

const AboutMe = styled.p`
  animation: 1s ${keyframes`${fadeIn}`};
  font-size: .95em;
  line-height: 1.5em;
  padding: .5em 0;
`;

const LinkResumeDiv = styled.div`
  padding: .6em 0 0em 0;
`;

const ScrollTo = styled.a`
  animation: 2s ${keyframes`${flash}`};
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  color: #175be3;
  font-weight: 500;
`;

const AboutMe2 = styled(AboutMe)``;

const Span = styled.span`
  color: #175be3;
  font-weight: 500;
`;

export default function AboutMoi() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = (e) => {
    setIsOpen(!isOpen);
  }

  return (
    <StyledAboutMoi>
      <HelloDiv>
        <Hello>
          HI,  MY NAME IS
      </Hello>
        <Name>
          Kay Chan
        </Name>

        <Title>
          I'm a software engineer and web developer based in NYC.
        </Title>
      </HelloDiv>

      <AboutMeOuterDiv>

        {!isOpen && (

          <AboutMeDiv id="AboutPart1">

            <AboutMe>
              Self-driven professional with broad technical skill-sets and communication skills.
            </AboutMe>

            <AboutMe>
              Worked 10+ years for major financial companies as a Unix <Span>C/C+ </Span> programmer and manager of Market Data team. Solid experience in <Span> software development life cycle</Span> and financial application.
            </AboutMe>
            <AboutMe>
            After becoming a mom, developed passion in web development using <Span>React</Span>, <Span>JavaScript</Span>, <Span>MongoDB</Span> and <Span>Ruby on Rails</Span>. Gained inspirations by communicating and interacting with people.  Love using technology to transform innovative ideas into products. Super rewarding when a product delivers positive impact and outcomes to others.
           </AboutMe>
          </AboutMeDiv>
        )}
        {isOpen && (
          <>
            <AboutMeDiv id="AboutPart2">
              <AboutMe2>
                Developed core application to provide real-time <Span>Market Data</Span> to 24x7 institutional investors and online customers. Responsive and proactive in making preventative measures to ensure product <Span>stability</Span>.  Designed and implemented application for <Span>fault tolerance</Span> and <Span>high availability</Span>.
            </AboutMe2>

              <AboutMe2>
                Hobbies include <Span>cooking</Span>, <Span>traveling</Span>, <Span>gardening</Span> and <Span>building construction</Span>. Most would agreed, travel and food are great energy boost for the mind and body.

            </AboutMe2>

              <AboutMe2>
              Becoming a mom has brought many joy and challenges.  My daughter, Annie was born prematurely.  Thanks to many professional guidance and supports, she is fully recovered and healthy!  Today, I share my story and actively help other families to learn the unknowns.
            </AboutMe2>

              <LinkResumeDiv>
              <LinkResume imgOption='1'>
                View Resume
              </LinkResume>
              </LinkResumeDiv>
            </AboutMeDiv>
          </>
        )}

        {!isOpen &&
          (
            <ScrollTo href="#AboutPart2" onClick={(e) => handleOpen(e)}>
              MORE about me ...
            </ScrollTo>
          )}

        {isOpen &&
          (
            <ScrollTo href="#AboutPart1" onClick={(e) => handleOpen(e)}>
              PREVIOUS
            </ScrollTo>
          )}
      </AboutMeOuterDiv>
    </StyledAboutMoi>
  )

}