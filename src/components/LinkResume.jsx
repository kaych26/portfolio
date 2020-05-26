import React from 'react';
import styled from 'styled-components';
import icon from '../assets/icons/resume.svg';


const StyledImgLink = styled.section`

  font-family: 'Shadows Into Light Two', cursive;
  letter-spacing: .1em;
  display: flex;
  /* justify-content: center; */

`;

const Link = styled.a`
  text-decoration: none;  
  color: #000;
  font-size: 1.2em;
 
`;

const Img = styled.img`
  width: 35px;
`;

const NavResume = styled.h2`
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  padding: .3em 2em;
  text-decoration: none;
  color: #fff;
  background-color: #878d8c;
  /* background-color: rgba(252, 251, 248, 0.8); */
  border-radius: 10px;
  height: 26px;

  &:hover {
    /* color: #fff; */
    background-color: #878d8c
  }
  &:active {
    background-color: #545d5c;
  }
`;



export default function LinkResume(props) {

  // const link = 'https://drive.google.com/file/d/1dgD9TQ2uK9CvewjmYTQ1WXZJHm2dtQZH/view';
  const link = 'https://drive.google.com/file/d/1D5qEa7BiQs2DNpuOEX81wkibF2fvfz1z/view';
  return (
    <StyledImgLink>
      <Link
        href={link} target="_blank" rel="noopener noreferrer">
        {!props.imgOption &&
          <>
            <Img
              src={icon} alt='resume' />
            {props.desc}
          </>
        }
        {props.imgOption &&
          <NavResume>
            {props.children}
          </NavResume>
        }


      </Link>

    </StyledImgLink>
  )



}