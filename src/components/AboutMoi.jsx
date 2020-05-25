import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import * as Scroll from 'react-scroll';
import { jello, flipInY, rotateInDownRight, flip, fadeInRight, slideInUp, rotateIn, slideInDown, swing, zoomInDown, zoomIn, zoomInUp, slideIn, rotateInDownLeft, slideInLeft, slideInRight, fadeIn } from 'react-animations';

const StyledAboutMoi = styled.section`
  /* animation: 2s ${keyframes`${slideInDown}`}; */
  display: flex;
  flex-direction: column;
  background-image: linear-gradient(rgba(246, 244, 241, 0.3), rgba(205, 205, 203, 0.3));

/* font-family: 'Roboto', sans-serif; */
  font-family: 'Montserrat', sans-serif;
  letter-spacing: .03em;

  padding: 1em;
  border-radius: 10px;
  height: 600px;
`;

const HelloDiv = styled.div`
  animation: 1s ${keyframes`${slideInDown}`};
`;

const Hello = styled.h1`
  color: #1e8ff7;

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
overflow: auto;
`;

const AboutMeDiv = styled.div`

`;
const AboutMeDiv2 = styled.div``;



const AboutMe = styled.p`
  animation: 2s ${keyframes`${fadeIn}`};
  font-size: .95em;
  line-height: 1.5em;
  padding: .5em 0;
`;
const MoreScrollto = styled.a`
cursor: pointer;

`;


const AboutMe2 = styled(AboutMe)``;

const MoreClick = styled.h3`
  text-align: center;
  cursor: pointer;
`;

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
        <AboutMeDiv id='AboutPart1'>

          <AboutMe>
            Self-driven professional with broad technical skill-sets and communication skills.
        </AboutMe>

          <AboutMe>
            Worked 10+ years for major financial companies as a Unix <Span>C/C+ </Span> programmer and manager of Market Data team. Solid experience in <Span> software development life cycle</Span> and financial application.
        </AboutMe>
          <AboutMe>
            After becoming a mom, developed passion in web development using <Span>React</Span>, <Span>JavaScript</Span>, <Span>MongoDB</Span> and <Span>Ruby on Rails</Span>. Gained inspirations by communicating and interacting with people.  Love using techology to transform innovated ideas into products. Super rewarding when product delivers positve impact and outcome to others.
        </AboutMe>
        </AboutMeDiv>

        {isOpen && (
          <>
            <AboutMeDiv2 id='AboutPart2'>

              <AboutMe2>
                Maintained core <Span>Market Data application</Span>, for real-time stock quotes to 24x7 customers has trained me to be responsive and proactive in making preventive measures to ensure product <Span>stability</Span>.  Learned the importantance of <Span>fault tolerance</Span> and <Span>high availability</Span> architecture design for <Span>full-stack application</Span>.
            </AboutMe2>

              <AboutMe2>
                Due to the nature of work in the fast pace environment of finacial business,learned to balance myself with many hobbies....including <Span>food</Span>and <Span>traveling</Span> with my family.  It is fascinating to connect to local <Span>cultures</Span> and people while experiencing delicious authentic food.

            </AboutMe2>

              <AboutMe2>
                Becoming a mom has brought many joy and challenges.  My daughter, Annie was born premature and thanks to many professional guidances and online resources, she overcame many obstacles. Today, she is a strong and healthy girl!  I am intrigued to use my experience to advocate and help others to learn the unknown. Continue to build my skills and use my ability to help others to make this a better place for my daughter.
            </AboutMe2>
            </AboutMeDiv2>

            {/* <MoreClick onClick={(e) => handleOpen(e)}> */}
            <MoreScrollto href="#AboutPart1">

              CLOSED
          </MoreScrollto>
            {/* </MoreClick> */}
          </>
        )}

      </AboutMeOuterDiv>
      {/* {!isOpen && ( */}
      <MoreScrollto href="#AboutPart2">
        <MoreClick onClick={(e) => handleOpen(e)}>

            Full Story ...
        </MoreClick>
      </MoreScrollto>

      {/* )} */}


    </StyledAboutMoi>
  )

}