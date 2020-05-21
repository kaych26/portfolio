import React, { useState } from 'react';
import styled from 'styled-components';

import github_icon from '../assets/icons/github_icon.png';
import linkedin_icon from '../assets/icons/linkedin.png';
import mail_icon from '../assets/icons/mail_icon.png';

const StyledFooter = styled.section`
  height: 100px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  /* align-content: center; */
  /* align-self: center; */
`;

const FooterContainer = styled.div`
  /* display: flex; */
  /* align-items: center; */
  /* justify-content: center; */
  /* align-content: center; */
  /* align-self: center; */
`;

const FooterIcon = styled.img`
  width: 50px;

`;

export default function Footer() {
  return (
    <StyledFooter>
      
      <FooterIcon src={linkedin_icon}/>
      <FooterIcon src={github_icon}/>
      <FooterIcon src={mail_icon} />
    </StyledFooter>
  );
}
