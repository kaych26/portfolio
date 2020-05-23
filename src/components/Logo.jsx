import React from 'react';
import styled from 'styled-components';

const StyledLogo = styled.section`
  /* font-family: 'Londrina Shadow', cursive; */
  font-family: 'Fredericka the Great', cursive;
  padding: 0.5em 1em;
`;

const LogoFrame = styled.div`
  border: 1px solid #ccc;
  border-radius: 3px;
  box-shadow: 0 8px 10px #878;
  /* transform: rotate(-2deg); */
  background-color: #F9F7F2;
`;

const LogoFname = styled.p`
  font-size: 1em;
  letter-spacing: 0.2em;
  color: black;
  padding: 0.3em 0.2em 0.2em 0.3em;
`;

const LogoLname = styled.p`
  font-size: 1em;
  color: black;
  
  padding: 0em 0.3em 0.3em 0.5em;
  /* padding: 0.1em 0.2em; */
`;

export default function Logo() {
  return (
    <StyledLogo>
      <LogoFrame>
        <LogoFname>Kay</LogoFname>
        <LogoLname>Chan</LogoLname>
      </LogoFrame>
    </StyledLogo>
  );
}
