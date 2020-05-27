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
  font-size: 10em;
  letter-spacing: -.09em;
  transform: rotate(-12deg);
 
  /* color: #3a4140; */
  color: #ffa500;
  color: #8d8d8d;
 
  color: #838383;
  color: #a1a1a1;
  color: #b4b4b4;
  color: #ffb6da;
  color: #ffd4db;
  color: #d3d3d3;
  /* color: #c6c6c6; */
  /* color: #f9f9f9; */
  /* color: #bababa; */
  /* color: #ff69b4; */
  /* color: #ff2dae; */

  @media (max-width: ${size.mobile}) {
    font-size: 2.8em;
    color: red;
  }
`;

const LogoLname = styled.p`
  /* background-image: linear-gradient(rgba(246, 244, 241, 0.3), rgba(205, 205, 203, 0.3)); */

  color: #3a4140;
  color: #f9f9f9;
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
        {/* <LogoLname>KC</LogoLname> */}
      </LogoFrame>
    </StyledLogo>
  );
}
