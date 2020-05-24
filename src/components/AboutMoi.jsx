import React from 'react';
import styled, { keyframes } from 'styled-components';

const StyledAboutMoi = styled.section`
  display: flex;
  flex-direction: column;
  background-image: linear-gradient(rgba(246, 244, 241, 0.3), rgba(205, 205, 203, 0.3));
  /* background-color: linear-gradient (to top, #CDCDCB, 20%, #F6F4F1); */
  /* background-color: rgba(231, 230, 228, 0.2); */

/* font-family: 'Roboto', sans-serif; */
  font-family: 'Montserrat', sans-serif;
  letter-spacing: .03em;
  /* font-weight: 600; */
  width: 50%;
  padding: 1em;
  border-radius: 10px;
  overflow: auto;
  height: 600px;
`;
const Hello = styled.h1`
  color: #1f5ede;
  /* color: #40e0d0; */
  font-size: 1.1em;
  font-weight: bold;
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
  
  /* letter-spacing: .05em; */
  /* text-align: center; */

`;
const SubTitle = styled.h2`
  font-size: 1.2em;
`;

const AboutMe = styled.p`
  font-size: 1em;
  line-height: 1.5em;
  padding: .5em 0;
`;


export default function AboutMoi() {

  return (

    <StyledAboutMoi>
      <Hello>
        HELLO! MY NAME IS
      </Hello>
      <Name>
        Kay Chan
      </Name>
      <Title>
        I'm a software engineer and web developer based in NYC.

        </Title>

      <AboutMe>

        A Self diven professional with broad technical skill-sets and communication skills.

        </AboutMe>

      <AboutMe>

        Worked 10+ years for major financial companies as a Unix C/C++ programmer and manager of Market Data team. Solid experience in software development life cycle and financial application.
      </AboutMe>
      <AboutMe>
        After becoming a mom, developed passion in web development using React, JavaScript, MongoDB and Ruby on Rails. Gained inspirations by communication and interacting with people.  Love using techology to transform innovated ideas into products. Super excited when product delivers positve impact and outcome to others.
      </AboutMe>

    </StyledAboutMoi>
  )

}