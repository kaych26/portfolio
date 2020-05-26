import React from 'react';
import styled from 'styled-components';

const StyledLogo = styled.section`
  /* font-family: 'Londrina Shadow', cursive; */
  font-family: 'Fredericka the Great', cursive;
  padding: 0.5em 1em;
  color: #ffa500;
`;

const LogoFrame = styled.div`
  border: 1px solid #ccc;
  border-radius: 2px;
  /* box-shadow: 0 8px 10px #878; */
  /* box-shadow: 0 8px 10px #ff2dae; */
  box-shadow: 0 4px 8px #878;

  /* transform: rotate(-2deg); */
  background-color: #F9F7F2;
  /* color: #ffa500; */
  font-weight: 300;
`;

const LogoFname = styled.p`
  font-size: 1.2em;
  letter-spacing: 0.2em;
  /* color: #3a4140; */
  /* color: #ffa500; */
  /* color: black; */
  color: #ff2dae;
  font-weight: 300;
  
  padding: 0.3em 0.3em 0 0.4em;

`;

const LogoLname = styled.p`
  font-size: 1.2em;
  /* color: #000; */
  color: #ff2dae;
  /* color: #3a4140; */
  /* color: #ffa500; */
  padding: 0em 0.3em 0.3em 0.4em;
  letter-spacing: 0.02em;

  
`;

const LogoTitle = styled.h3`
  color: '#000';
  font-size: .3em;
  /* font-family: 'Roboto', sans-serif; */
  font-family: 'Montserrat', sans-serif;
`;

const Span = styled.span`
  font-size: .5em;
  color: black;
  /* text-decoration: underline; */
`;

const LetterSpan = styled.span`
  color: #ff2dae;
`;




export default function Logo() {
  return (
    <StyledLogo>
      <LogoFrame>
        <LogoFname><LetterSpan>K</LetterSpan><Span>AY</Span></LogoFname>
        <LogoLname><LetterSpan>C</LetterSpan><Span>HAN</Span></LogoLname>
        {/* <LogoTitle>Software Engineer</LogoTitle> */}
      </LogoFrame>
    </StyledLogo>
  );
}
