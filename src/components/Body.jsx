import React from 'react';
import styled from 'styled-components';

const StyledBody = styled.section`
  padding-top: 20px;  
`;

export default function Body(props) {
  return (
    <StyledBody>
      {props.children}    
    </StyledBody>
  );
}
