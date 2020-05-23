import React from 'react';
import styled from 'styled-components';

const StyledBody = styled.section`
  /* height: 60%; */
  padding-top: 80px;
  
`;

export default function Body(props) {
  return (
    <StyledBody>
      {props.children}
     
    </StyledBody>
  );
}
