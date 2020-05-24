import React from 'react';
import styled from 'styled-components';
import icon from '../assets/icons/mail.svg';

const StyledImgLink = styled.section`
  font-family: 'Shadows Into Light Two', cursive;
  letter-spacing: .2em;
`;
const Link = styled.a``;

const Img = styled.img`
  width: 33px;
`;

export default function Github() {
  const link = 'https://www.linkedin.com/in/kaych26/';
  return (
    <StyledImgLink>
      <Link
        href="mailto:kaych26@gmail.com">
        <Img
          src={icon} alt='email' />
        
      </Link>

    </StyledImgLink>
  )
}