import React from 'react';
import styled from 'styled-components';
import LinkLinkedin from './LinkLinkedin';
import LinkGithub from './LinkGithub';
import LinkResume from './LinkResume';
import LinkEmail from './LinkEmail';

const StyledInfo = styled.section`
  width: 100%;
  padding: 38px 0 30px 0;

  display: flex;
  justify-content: center;
`;

const InfoContainer = styled.div`
  padding-bottom: 38px;
  display: flex;
  width: 30%;
  justify-content: space-between;
`;

export default function InfoLinks() {
  return (
    <StyledInfo>
      <InfoContainer>
        <LinkResume />
        <LinkLinkedin />
        <LinkGithub />
        <LinkEmail />
      </InfoContainer>
    </StyledInfo>
  );
}
