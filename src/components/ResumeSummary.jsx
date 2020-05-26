import React from 'react';
import styled from 'styled-components';
import LinkResume from './LinkResume';

const StyledResumeSummary = styled.section`
  font-family: 'Montserrat', sans-serif;
  /* font-family: 'Roboto', sans-serif; */
  /* font-family: 'Josefin Sans', sans-serif; */
  /* font-family: 'Londrina Shadow', cursive; */
  background-image: linear-gradient(rgba(246, 244, 241, 0.3), rgba(205, 205, 203, 0.3));
  /* letter-spacing: .01em; */
  word-spacing: .02em;
  font-weight: 300;
  /* letter-spacing: .03em; */
  overflow: auto;
  /* padding: .3em 0; */
`;

const SummaryHeading = styled.h1`
  color: #175be3;
  font-size: 1.9em;
  padding: .2em 0 .1em 0em;
`;

const Summary = styled.p`
  line-height: 1.15em;
  font-size: .95em;
`;

const Skills = styled.p`
  line-height: 1.15em;
  font-size: .95em;
`;


const Experience = styled.div`
  /* overflow: auto; */
`;

const Title = styled.h3`
  font-size: 1.1em;
  padding: .8em 0 0.15em 0;
  font-weight: 600;
  color: #175be3;
  /* text-align: center; */
`;

const DescDiv = styled.div`
  display: grid;
  grid-template-columns: auto 130px;
  align-items: center;
  padding: .1em 0;
 

  /* grid-template-rows:  */
`;

const Company = styled.h2`
  font-size: .95em;
  font-weight: 600;
  padding: .1em 0;
`;

const Desc = styled.p`
  font-size: .9em;
  line-height: 1.13em;
  /* letter-spacing: .03em; */
  font-weight: normal;
  padding-top: .1em;
  overflow: none;
`;

const Time = styled.h3`
  font-size: .85em;
  padding-right: 2em;
`;

const Education = styled.h3`
  font-size: .95em;
  line-height: 1em;
  /* padding-top: .1em; */
`;

const LinkResumeDiv = styled.div`
  padding-top: .9em;
`;

const Span = styled.span`
  /* color: #175be3; */
  font-size: .95em;
  font-weight: 600;
`;

const Span2 = styled.span`
  font-size: .9em;
`;



export default function ResumeSummary() {
  return (

    <StyledResumeSummary>
      <SummaryHeading>
        SUMMARY
      </SummaryHeading>

      <Summary>
        I am a versatile Software Engineer who holds 10+ years experience working as a Senior Programmer and Manager for major financial corporations. Whether it be writing intricate code or managing cross-functional technology teams, I excel at breaking down complex information into simplistic and intuitive solutions.
      </Summary>

      <Title>
        SKILLS
      </Title>

      <Skills>
        ReactJS, JavaScript, HTML, CSS, NodeJS, MongoDB, Mongoose JS, Express JS, Ruby, Ruby on Rails, Jest, RestfulAPI, Sequelize, C/C++, Python3, Perl, Shell, SQL, Oracle, Sybase, Github, SCCS, Unix, Linux, Unix Packaging Tools, WIX, Project- Management, Software Development Life Cycle (SDLC), AWS
      </Skills>

      <Title>
        EXPERIENCE
      </Title>

      <Experience>


        <DescDiv>
          <Company>
            Consultant
          <Desc>
              Automation Software Engineer
          </Desc>
          </Company>
          <Time>
            2013-Present
        </Time>
        </DescDiv>

        <DescDiv>
          <Desc>
            Parental Leave (Mom)
        </Desc>
          <Time>
            2004 - 2013
        </Time>
        </DescDiv>

        <DescDiv>
          <Company>
            Bank of New York
          <Desc>
              Senior Programmer / Manager, VP - Market Data Group
          </Desc>
          </Company>
          <Time>
            1999 - 2003
        </Time>
        </DescDiv>

        <DescDiv>
          <Company>
            Societe Generale / SG Cowen
          <Desc>
              Senior Programmer, Assistant Treasurer - Finance Techology Group
          </Desc>
          </Company>
          <Time>
            1998 - 1999
        </Time>
        </DescDiv>

        <DescDiv>
          <Company>
            Citi Group (Formerly Salomon Brothers)
          <Desc>
              Team Leader Global Develpment & Deployment Servies
          </Desc>
          </Company>
          <Time>
            1994 - 1998
        </Time>
        </DescDiv>
      </Experience>

      <Title>
        EDUCATION
      </Title>
      <DescDiv>
        <Education>
          <Span>General Assembly</Span> | <Span2>Software Engineering Immersive</Span2>
        </Education>

        <Time>
          New York, NY
        </Time>
      </DescDiv>

      <DescDiv>
        <Education>
          <Span>New York University</Span> | <Span2>Bachelor of Arts in Computer Science</Span2>
        </Education>

        <Time>
          New York, NY
        </Time>
      </DescDiv>

      <DescDiv>
        <Education>
          <Span>AWS</Span> | <Span2>Certified AWS Solutions Architect Associate</Span2>
        </Education>

        <Time>
          New York, NY
        </Time>
      </DescDiv>

      <LinkResumeDiv>
        <LinkResume imgOption='1'>
          View FULL Resume
        </LinkResume>
      </LinkResumeDiv>

    </StyledResumeSummary>
  )

}