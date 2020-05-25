import React from 'react';
import styled from 'styled-components';
import LinkLinkedin from './LinkLinkedin';
import LinkEmail from './LinkEmail';
import LinkResume from './LinkResume';

const StyledLinkNavbar = styled.section`

`;

export default function LinkNavbar() {
  return (
    <StyledLinkNavbar>
      <LinkResume />
      <LinkLinkedin />
      <LinkEmail />

    </StyledLinkNavbar>
  )

}