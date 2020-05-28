import React from 'react';
import styled from 'styled-components';
import { useMediaQuery } from 'react-responsive';
import size from './size';


const StyledLogo = styled.section`
  /* font-family: 'Londrina Shadow', cursive; */
  font-family: 'Fredericka the Great', cursive;
  padding: 0.8em 1em;
  color: #ffa500;
  width: 170px;
  position: fixed;
z-index: 0;
`;

const LogoFrame = styled.div`
  font-family: 'Fredericka the Great', cursive;
  /* border: 1px solid #ccc;
  border-radius: 2px;
  box-shadow: 0 4px 8px #878;
  background-color: #F9F7F2;
  font-weight: 300;
  transform: rotate(-2deg); */
  
`;

const LogoFname = styled.p`
  font-size: 20em;
  letter-spacing: -.09em;
  transform: rotate(-12deg);
 
  /* color: #3a4140; */
  /* color: #ffa500;
  color: #8d8d8d;
 
  color: #838383;
  color: #a1a1a1;
  color: #b4b4b4;
  color: #ffb6da;
  color: #ffd4db; */
  color: #d3d3d3;


  @media (max-width: ${size.mobile}) {
    font-size: 2.8em;
    color: red;
  }
`;

const LogoLname = styled.p`
  /* background-image: linear-gradient(rgba(246, 244, 241, 0.3), rgba(205, 205, 203, 0.3)); */

  color: #3a4140;
  color: #f9f9f9;
  /* color: #ffa500; */
  /* color: #ff2dae; */
  /* color: linear-gradient(rgba(6, 0, 2, 0.3), rgba(205, 205, 203, 0.3)); */
  font-size: 1.9em;
  letter-spacing: 0.02em;
  font-weight: 500;
  transform: rotate(-8deg);

  /* font-family: 'Montserrat', sans-serif; */
`;


export default function Logo(props) {

  const isMobile = useMediaQuery({ query: `(max-width: ${size.mobile})` })

  let showLogo = '0';

  if (props.location.pathname === '/') {
    showLogo = '0';
  }
  else if (props.location.pathname === '/about' && !isMobile) {

    showLogo = '1';
  }
  else if (props.location.pathname === '/work' && !isMobile) {

    showLogo = '1'
  }
  else if (props.location.pathname === '/resume' && !isMobile) {
    showLogo = '1'
  }

  return (
    <StyledLogo>
      {showLogo === '1' && (

        <LogoFrame>
          <LogoFname>KC</LogoFname>

        </LogoFrame>
      )}
    </StyledLogo>
  );
}
