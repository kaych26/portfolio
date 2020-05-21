import React from 'react';
import styled from 'styled-components';
import linkedin_icon from '../assets/icons/linkedin.png';





const StyledContact = styled.section`
  /* margin-top: 50px; */
  background-color: red;
  display: flex;
  align-items: center;
  /* align-content: center; */
  align-self: center;

  width: 80%;
  height: 300px;
  /* margin: 30px; */
  /* height: 80%; */
`;

const ContactDiv = styled.div`
  font-size: 48px;
  background-color: green;
`;

const ContactImg = styled.img``;

export default function Contact() {
  const phone = '347-276-0169';
  const email = 'kaych26@gmail.com';

  return (
    <StyledContact>
      <ContactDiv>
        {/* <ContactImg src={linkedin_icon} alt="linkedIn"> */}
        hello
        {/* </ContactImg> */}
      </ContactDiv>
      <ContactDiv>{phone}</ContactDiv>
    </StyledContact>
  );
}
