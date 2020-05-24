import React from 'react';
import styled, { keyframes } from 'styled-components';
import LinkLinkedin from './LinkLinkedin';
import LinkGithub from './LinkGithub';
import LinkResume from './LinkResume';
import PostIt from './PostIt';


const StyledAboutSidebar = styled.section`
  padding: 0 25px 0 20px;`;

const PostItTitle = styled.h2`
  text-align: center;
  font-size: .8em;
`;


export default function AboutSidebar() {
  return (
    <StyledAboutSidebar>
        <PostIt rotate='3deg' size='100px'>

          <PostItTitle>
            Resume
        </PostItTitle>
          <LinkResume />      
     
        </PostIt>

      <PostIt rotate='-5deg' size='100px'>
        <PostItTitle>
          LinkedIn
        </PostItTitle>
        <LinkLinkedin />
      </PostIt>

      <PostIt rotate='4deg' size='100px'>
        <PostItTitle>
          Github
        </PostItTitle>
        <LinkGithub />
      </PostIt>


      {/* <AboutPostItLink href="https://drive.google.com/file/d/1dgD9TQ2uK9CvewjmYTQ1WXZJHm2dtQZH/view" target="_blank"> */}
      {/* <AboutPostItLink href={resume_link} target="_blank" rel="noopener noreferrer">
                  <AboutPostItImg src={resume_icon} alt='resume' />
                </AboutPostItLink>
                <AboutPostItLink href={resume_link} target="_blank" rel="noopener noreferrer">
                  Resume
            </AboutPostItLink>
              </ImgLinkFrame> */}

      {/* <ImgLinkFrame>
                <AboutPostItLink href="mailto:kaych26@gmail.com">
                  <AboutPostItImg src={mail_icon} alt='email' />
                </AboutPostItLink>
                <AboutPostItLink href="mailto:kaych26@gmail.com">
                  Email
          </AboutPostItLink>
              </ImgLinkFrame> */}
    </StyledAboutSidebar>
  )

}