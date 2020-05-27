import React from 'react';
import styled from 'styled-components';
import size from './size';


const StyledLogo = styled.section`
  /* font-family: 'Londrina Shadow', cursive; */
  font-family: 'Fredericka the Great', cursive;
  padding: 0.8em 1em;
  color: #ffa500;
  width: 170px;
`;

const LogoFrame = styled.div`
  font-family: 'Fredericka the Great', cursive;
  /* border: 1px solid #ccc;
  border-radius: 2px;
  box-shadow: 0 4px 8px #878;
  background-color: #F9F7F2;
  font-weight: 300;
  transform: rotate(-2deg); */

  
`;

const LogoFname = styled.p`
  font-size: 5.05em;
  letter-spacing: -.09em;
  transform: rotate(-12deg);
  /* color: #3a4140; */
  color: #ffa500;
  /* color: #ff2dae; */

  @media (max-wdith: ${size.mobile}) {
    font-szie: 1.2em;
    color: red;
  }
`;

const LogoLname = styled.p`
  /* background-image: linear-gradient(rgba(246, 244, 241, 0.3), rgba(205, 205, 203, 0.3)); */

  color: #3a4140;
  /* color: #ffa500; */
  /* color: #ff2dae; */
  /* color: linear-gradient(rgba(6, 0, 2, 0.3), rgba(205, 205, 203, 0.3)); */
  font-size: 1.9em;
  letter-spacing: 0.02em;
  font-weight: 500;
  transform: rotate(-8deg);

  /* font-family: 'Montserrat', sans-serif; */
`;

const Span = styled.span`
  font-size: .5em;
  color: black;
`;

const LetterSpan = styled.span`
  color: #ff2dae;
`;

export default function Logo() {
  return (
    <StyledLogo>
      <LogoFrame>
        <LogoFname>KC</LogoFname>
        {/* <LogoFname>K<LetterSpan>C</LetterSpan></LogoFname> */}
      </LogoFrame>
    </StyledLogo>
  );
}
