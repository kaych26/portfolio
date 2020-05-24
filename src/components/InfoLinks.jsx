import React from 'react';
import styled from 'styled-components';

import resume_icon from '../assets/icons/resume.svg';
import github_icon from '../assets/icons/github.svg';
import linkedin_icon from '../assets/icons/linkedin.svg';
import mail_icon from '../assets/icons/mail.svg';

const StyledInfo = styled.section`
  /* background-color: blue; */
  width: 100%;
  /* position: fixed; */
  /* bottom: 0px; */
  padding: 38px 0 30px 0;

  display: flex;
  justify-content: center;
`;

const InfoContainer = styled.div`
  /* background-color: red; */
  padding-bottom: 38px;
  display: flex;
  width: 30%;
  justify-content: space-between;
`;

const InfoIcon = styled.img`
  width: 35px;
  height: 35px;
`;

export default function InfoLinks() {
  const resume_link = 'https://drive.google.com/file/d/1dgD9TQ2uK9CvewjmYTQ1WXZJHm2dtQZH/view';
  const linkedin_link = 'https://www.linkedin.com/in/kaych26/';
  const github_link = 'https://github.com/kaych26';
  // const mail_addr = 'kaych26@gmail.com';

  return (
    <StyledInfo>
      <InfoContainer>
        <a href={resume_link} target="_blank" rel="noopener noreferrer">
          <InfoIcon
            src={resume_icon} alt='resume' />
        </a>

        <a href={linkedin_link} target="_blank" rel="noopener noreferrer">
          <InfoIcon
            src={linkedin_icon} alt='linkedIn'
          />
        </a>

        <a href={github_link} target="_blank" rel="noopener noreferrer">
          <InfoIcon src={github_icon} alt='github' />
        </a>

        <a href="mailto:kaych26@gmail.com" target="_blank" rel="noopener noreferrer">
          <InfoIcon src={mail_icon} alt='mail' />
        </a>
      </InfoContainer>
    </StyledInfo>
  );
}
