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
  box-shadow: 0 4px 8px #878;
  background-color: #F9F7F2;
  font-weight: 300;
  /* transform: rotate(-2deg); */
`;

const LogoFname = styled.p`
  font-size: 1.2em;
  letter-spacing: 0.2em;
  color: #ff2dae;
  font-weight: 300;
  padding: 0.3em 0.3em 0 0.4em;
`;

const LogoLname = styled.p`
  font-size: 1.2em;
  color: #ff2dae;
  padding: 0em 0.3em 0.3em 0.4em;
  letter-spacing: 0.02em;
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
        <LogoFname><LetterSpan>K</LetterSpan><Span>AY</Span></LogoFname>
        <LogoLname><LetterSpan>C</LetterSpan><Span>HAN</Span></LogoLname>
      </LogoFrame>
    </StyledLogo>
  );
}
