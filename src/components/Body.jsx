import React from 'react';
import styled from 'styled-components';

const StyledBody = styled.section`
  height: 60%;
  display: grid;
  grid-template-rows: auto;
  align-items: center;

  /* overflow: hidden; */
  display: relative;

`;

const BodyContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default function Body(props) {
  return (
    <StyledBody>
      <BodyContainer>{props.children}</BodyContainer>
    </StyledBody>
  );
}
