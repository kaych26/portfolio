import React from 'react';
import { useMediaQuery } from 'react-responsive';
import styled from 'styled-components';
import size from './size';

const StyledBody = styled.section`
  padding-top: 1.5em;  
  @media (max-width: ${size.mobile}) {
    padding: 1.4em;
  }
`;

export default function Body(props) {
  return (
    <StyledBody>
      {props.children}    
    </StyledBody>
  );
}
