import React from 'react';
import styled, { keyframes } from 'styled-components';
import { useMediaQuery } from 'react-responsive';

import LinkLinkedin from './LinkLinkedin';
import LinkGithub from './LinkGithub';
import LinkResume from './LinkResume';
import LinkEmail from './LinkEmail';
import PostIt from './PostIt';
import size from './size';

const StyledAboutSidebar = styled.section`
/* height: 100%; */
  /* grid-template-rows: 180px 200px; */
  /* row-gap: 3em; */
  /* column-gap: 1em; */
  /* display: grid;
  grid-template-columns: 1fr;
  justify-content: center; */
  `;

const PostItFrame = styled.div`
  padding: 2em;
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

const PostitMsg = styled.h3`
  text-align: center;
  font-size: .85em;
  letter-spacing: .02em;
  color: #ff69b4;
  padding-top: .5em;
  @media (max-width: ${size.tablet}) {
    font-size: .9em;
    padding-top: .5em;
    letter-spacing: .01em;
    line-height: 1.3em;
  }


`;
const PostItDiv = styled.div`
  text-align: center;
  font-size: .9em;
`;

export default function AboutSidebar() {
  const isMobile = useMediaQuery({ query: `(max-width: ${size.mobile})` })
  const isTablet = useMediaQuery({ query: `(max-width: ${size.tablet})` });
  // let postSize = '188px';
  let postSize = '230px';

  if (isTablet) {
     postSize = '190px';
  }

  return (
    <>
      <StyledAboutSidebar>

        <PostItFrame>
          <PostIt rotate='3deg' size={postSize}>
            {/* <PostIt rotate='3deg' size='188px'> */}

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

            {/* {!isTablet && */}
            <PostitMsg>
              Keep hacking, keep exploring & SKY is the limit !'
            </PostitMsg>
            {/* } */}
          </PostIt>
        </PostItFrame>

        <PostItFrame>

          {/* <PostIt rotate='-5deg' size='160px'>
          <PostItTitle>
            To Do
          </PostItTitle>
          <PostItDiv>
          Keep hacking, keep exploring & SKY is the limit !'
          </PostItDiv>
        </PostIt> */}
        </PostItFrame>

      </StyledAboutSidebar>
    </>
  )
}