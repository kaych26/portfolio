import React from 'react';
import styled from 'styled-components';

const StyledLogo = styled.section`
  /* font-family: 'Londrina Shadow', cursive; */
  font-family: 'Fredericka the Great', cursive;
  padding: 0.5em 1em;
  color: #ffa500;
  width: 170px;
`;

const LogoFrame = styled.div`
  font-family: 'Fredericka the Great', cursive;
  /* border: 1px solid #ccc;
  border-radius: 2px;
  box-shadow: 0 4px 8px #878;
  background-color: #F9F7F2;
  font-weight: 300; */
  /* transform: rotate(-2deg); */

  /* border-radius: 60%;
  border: 8px solid #3a4140;
  border-right: transparent;
  border-top: transparent; */

  /* box-shadow: 0 4px 6px #878; */

`;

const LogoFname = styled.p`
  font-size: 1.9em;
  letter-spacing: 0.1em;
  /* color: #ff2dae; */
  /* font-weight: 300; */
  /* padding: 0.3em 0.3em 0 0.4em; */
  /* margin-top: -100px;
  margin-bottom: 30px;
  margin-top: -50px; */
  transform: rotate(-8deg);
  color: #3a4140;

`;

const LogoLname = styled.p`
  /* background-image: linear-gradient(rgba(246, 244, 241, 0.3), rgba(205, 205, 203, 0.3)); */

  color: #3a4140;
  /* color: #ffa500; */
  /* color: #ff2dae; */
  /* color: linear-gradient(rgba(6, 0, 2, 0.3), rgba(205, 205, 203, 0.3)); */
  font-size: 1.9em;
  /* padding: 0em 3em 0.3em 1.3em; */
  letter-spacing: 0.02em;
  /* margin-top: -68px; */
  /* margin-left: -19px; */
  transform: rotate(-8deg);

  /* font-family: 'Montserrat', sans-serif; */
  font-weight: 500;
  /* margin-left: -120px;
 
  margin-bottom: -100px; */
  margin-top: -.1em;
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
        <LogoFname>Kay</LogoFname>
        <LogoLname>Chan</LogoLname>

        {/* <LogoFname><LetterSpan>K</LetterSpan></LogoFname> */}
        {/* <LogoLname><LetterSpan>C</LetterSpan></LogoLname> */}
        {/* <LogoFname><LetterSpan>K</LetterSpan><Span>AY</Span></LogoFname>
        <LogoLname><LetterSpan>C</LetterSpan><Span>HAN</Span></LogoLname> */}
      </LogoFrame>
    </StyledLogo>
  );
}
