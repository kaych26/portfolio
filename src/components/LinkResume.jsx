import React from 'react';
import styled from 'styled-components';
import icon from '../assets/icons/resume.svg';

const StyledImgLink = styled.section`
  font-family: 'Shadows Into Light Two', cursive;
  letter-spacing: .1em;
  display: flex;
  justify-content: center;
  z-index: 8;
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
  font-size: .9em;
  padding: 15px 8px;
 
  text-decoration: none;
  color: #fff;
  text-align: center;
  /* background-color: #878d8c; */
  background-color: #175be3;
  box-shadow: .2em .3em #888;
  border-radius: 10px;
  
  &:hover {
    background-color: #878d8c
  }
  &:active {
    background-color: #545d5c;
  }
`;

export default function LinkResume(props) {
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