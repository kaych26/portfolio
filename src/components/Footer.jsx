import React from 'react';
import styled from 'styled-components';

import resume_icon from '../assets/icons/resume_simple.svg';
import github_icon from '../assets/icons/github_simple.svg';
import linkedin_icon from '../assets/icons/linkedin_simple.svg';
import mail_icon from '../assets/icons/mail_simple.svg';

const StyledFooter = styled.section`
  /* background-color: blue; */
  width: 100%;
  position: fixed;
  bottom: 0px;
  padding: 5px 10px;

  display: flex;
  justify-content: center;
`;

const FooterContainer = styled.div`
  /* background-color: red; */
  padding-bottom: 38px;
  display: flex;
  width: 30%;
  justify-content: space-between;
`;

const FooterIcon = styled.img`
  width: 35px;
  height: 35px;
`;

export default function Footer() {
  const resume_link = 'https://drive.google.com/file/d/1dgD9TQ2uK9CvewjmYTQ1WXZJHm2dtQZH/view';
  const linkedin_link = 'https://www.linkedin.com/in/kaych26/';
  const github_link = 'https://github.com/kaych26';
  // const mail_addr = 'kaych26@gmail.com';

  return (
    <StyledFooter>
      <FooterContainer>
        <a href={resume_link} target="_blank" rel="noopener noreferrer">
          <FooterIcon
            src={resume_icon} alt='resume' />
        </a>

        <a href={linkedin_link} target="_blank" rel="noopener noreferrer">
          <FooterIcon
            src={linkedin_icon} alt='linkedIn'
          />
        </a>

        <a href={github_link} target="_blank" rel="noopener noreferrer">
          <FooterIcon src={github_icon} alt='github' />
        </a>

        <a href="mailto:kaych26@gmail.com" target="_blank" rel="noopener noreferrer">
          <FooterIcon src={mail_icon} alt='mail' />
        </a>
      </FooterContainer>
    </StyledFooter>
  );
}
