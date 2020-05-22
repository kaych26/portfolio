import React from 'react';
import styled from 'styled-components';

const StyledLogo = styled.section`
  /* font-family: 'Londrina Shadow', cursive; */
  font-family: 'Fredericka the Great', cursive;
  padding: 0.3em 0.5em;
`;

const LogoFrame = styled.div`
  border: 1px solid;
  border-radius: 3px;
`;

const LogoFname = styled.p`
  font-size: 0.8em;
  letter-spacing: 0.2em;
  color: black;
  padding: 0.1em;
`;

const LogoLname = styled.p`
  font-size: 0.8em;
  color: black;
  padding: 0.1em;
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
