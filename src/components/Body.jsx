import React from 'react';
import styled from 'styled-components';

const StyledBody = styled.section`
  /* height: 60%; */
  padding-top: 90px;
  /* display: grid;
  grid-template-rows: auto;
  align-items: enter; */

  /* overflow: hidden; */
  /* display: relative; */
`;

export default function Body(props) {
  return (
    <StyledBody>
      {props.children}
     
    </StyledBody>
  );
}
