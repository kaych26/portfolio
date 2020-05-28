import React from 'react';
import { useMediaQuery } from 'react-responsive';
import styled from 'styled-components';
import size from './size';

const StyledBody = styled.section`
  padding-top: 1.3em;  

  @media (max-width: ${size.tablet}) {
      padding: 3.5em .2em .2em .5em;
    }
    @media (max-width: ${size.mobile}) {
      padding: 1.6em .2em .2em .5em;
  }
`;

export default function Body(props) {
  return (
    <StyledBody>
      {props.children}    
    </StyledBody>
  );
}
