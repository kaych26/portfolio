import React from 'react';
import styled from 'styled-components';

const StyledBody = styled.section`
  height: 60%;
  font-size: 38px;
  display: grid;
grid-template-rows: auto;
align-items: center;


  overflow: hidden;
  display: relative;
  padding-bottom: 100px; */

`;

const BodyContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const BodyTitle = styled.h1`
  font-size: 1em;
  padding: 1em;
  letter-spacing: 0.2em;
`;

const BodyJob = styled.h2`
  font-size: 0.5em;
  letter-spacing: 0.1em;
`;

export default function Body(props) {
  return (
    <StyledBody>
      <BodyContainer>
   
        <div>
          {/* {props.name} */}
          {props.children}
        </div>
        {/* <BodyTitle>Kay Chan</BodyTitle>
        <BodyJob>
          {' '}
          Software Engineer | Web Developer | Finance Techology
        </BodyJob> */}
      </BodyContainer>
    </StyledBody>
  );
}
