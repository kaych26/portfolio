import React from 'react';
import styled, { keyframes } from 'styled-components';
import { getByPlaceholderText } from '@testing-library/react';

const StyledCopyright = styled.h1`
  font-size: .8em;
  font-family: 'Montserrat', sans-serif;
  display: flex;
  align-items: center;
`;

export default function Copyright() {
  const year = new Date().getFullYear();
  return (

    <StyledCopyright>
      &copy; {year} Kay Chan
    </StyledCopyright>
  )

}