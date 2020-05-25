import React from 'react';
import styled, { keyframes } from 'styled-components';
import { jello, flipInY, rotateInDownRight, flip, fadeInRight, slideInUp, rotateIn, slideInDown, swing, zoomInDown, zoomIn, zoomInUp, slideIn, rotateInDownLeft, slideInLeft, slideInRight, fadeIn } from 'react-animations';

const StyledAboutMoi = styled.section`
  /* animation: 2s ${keyframes`${slideInDown}`}; */
  display: flex;
  flex-direction: column;
  background-image: linear-gradient(rgba(246, 244, 241, 0.3), rgba(205, 205, 203, 0.3));

/* font-family: 'Roboto', sans-serif; */
  font-family: 'Montserrat', sans-serif;
  letter-spacing: .03em;
  /* font-weight: 600; */
  /* width: 50%; */
  padding: 1em;
  border-radius: 10px;
  overflow: auto;
  height: 600px;
`;

const HelloDiv = styled.div`
  animation: 1s ${keyframes`${slideInDown}`};
`;

const Hello = styled.h1`
  color: #1e8ff7;
  /* color: #40e0d0; */
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
  padding-bottom: .8em;
`;

const AboutMe = styled.p`
  animation: 2s ${keyframes`${fadeIn}`};
  font-size: 1em;
  line-height: 1.5em;
  padding: .5em 0;
`;

const SpanTxt = styled.span`
  color: #175be3;
  font-weight: 500;
`;


export default function AboutMoi() {

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

      <AboutMe>

        Self driven professional with broad technical skill-sets and communication skills.

        </AboutMe>

      <AboutMe>

        Worked 10+ years for major financial companies as a Unix <SpanTxt>C/C++ </SpanTxt>programmer and manager of Market Data team. Solid experience in software development life cycle and financial application.
      </AboutMe>
      <AboutMe>
        After becoming a mom, developed passion in web development using <SpanTxt>React</SpanTxt>, <SpanTxt>JavaScript</SpanTxt>, <SpanTxt>MongoDB</SpanTxt> and <SpanTxt>Ruby on Rails</SpanTxt>. Gained inspirations by communication and interacting with people.  Love using techology to transform innovated ideas into products. Super excited when product delivers positve impact and outcome to others.
      </AboutMe>

    </StyledAboutMoi>
  )

}