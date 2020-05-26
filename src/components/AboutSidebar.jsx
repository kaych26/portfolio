import React from 'react';
import styled, { keyframes } from 'styled-components';

import LinkLinkedin from './LinkLinkedin';
import LinkGithub from './LinkGithub';
import LinkResume from './LinkResume';
import LinkEmail from './LinkEmail';
import PostIt from './PostIt';

const StyledAboutSidebar = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  row-gap: 3em;
  column-gap: 1em;
  `;

const LinkFrame = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  row-gap: 1em;
  column-gap: 1em;
`;

const LinkTitle = styled.h2`
  text-align: center;
  font-size: .8em;
  letter-spacing: .1em;
`;

const PostItTitle = styled.h2`
  text-align: center;
  font-weight: bold;
  color: #ff69b4;
  padding: .5em;
`;
const PostItDiv = styled.div`
  text-align: center;
  font-size: .9em;
`;

export default function AboutSidebar() {
  return (
    <>
      <StyledAboutSidebar>
        <PostIt rotate='3deg' size='160px'>

          <LinkFrame>
            <LinkTitle>
              <LinkResume />
              Resume
            </LinkTitle>

            <LinkTitle>
              <LinkLinkedin />
              LinkedIn
            </LinkTitle>

            <LinkTitle>
              <LinkGithub />
              Github
            </LinkTitle>

            <LinkTitle>
              <LinkEmail />
              Email
            </LinkTitle>
          </LinkFrame>
        </PostIt>

        <PostIt rotate='-5deg' size='160px'>
          <PostItTitle>
            To Do
          </PostItTitle>
          <PostItDiv>
          Keep hacking, keep exploring & SKY is the limit !'
          </PostItDiv>
        </PostIt>

      </StyledAboutSidebar>
    </>
  )
}