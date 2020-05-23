import React from 'react';
import styled from 'styled-components';
import linkedin_icon from '../assets/icons/linkedin.png';


const StyledContact = styled.section`
  /* background-color: red; */
  /* display: flex;
  align-items: center; */
  /* align-content: center; */
  /* align-self: center; */

  /* width: 80%;
  height: 300px; */
font-size: 1.2em;

`;

const ContactDiv = styled.div`
padding: .5em;
`;

const ContactImg = styled.img``;

export default function Contact() {
  const phone = '347-276-0169';
  const email = 'kaych26@gmail.com';

  return (
    <StyledContact>
        {/* <ContactImg src={linkedin_icon} alt="linkedIn"> */}
        
        {/* </ContactImg> */}
      <ContactDiv>{phone}</ContactDiv>
      <ContactDiv>
        {email}
      </ContactDiv>
    </StyledContact>
  );
}
