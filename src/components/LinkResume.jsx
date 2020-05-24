import React from 'react';
import styled from 'styled-components';
import icon from '../assets/icons/resume.svg';

const StyledImgLink = styled.section`

  font-family: 'Shadows Into Light Two', cursive;
  letter-spacing: .1em;
  display: flex;
  justify-content: center;

`;

const Link = styled.a`
  text-decoration: none;  
  color: #000;
  font-size: 1.2em;
 
`;

const Img = styled.img`
  width: 35px;
`;


export default function LinkResume(props) {
  const link = 'https://drive.google.com/file/d/1dgD9TQ2uK9CvewjmYTQ1WXZJHm2dtQZH/view';
  return (
    <StyledImgLink>
      <Link
        href={link} target="_blank" rel="noopener noreferrer">
        <Img
          src={icon} alt='resume' />
          {props.desc}
      </Link>

    </StyledImgLink>
  )



}