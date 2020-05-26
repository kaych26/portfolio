import React from 'react';
import styled, {keyframes} from 'styled-components';
import { Link } from 'react-router-dom';
import arrow_icon from '../assets/icons/arrow-right.svg';
import { merge, flash, lightSpeedIn, slideInLeft} from 'react-animations';


const slideSpeed = merge(slideInLeft, lightSpeedIn);

const StyledFooter = styled.section`

  animation: 2s ${keyframes`${slideInLeft}`};
  /* animation: 2s ${keyframes`${slideSpeed}`}; */
  width: 100%;
  position: fixed;
  bottom: 0px;
  /* padding: 5px 0 20px 0; */

  
  padding-right: 3em;

  /* display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  align-items: flex-end; */


  z-index: auto;
  display: flex;
  justify-content: flex-end;
`;


const FooterContainer = styled.div`

  padding-right: 3em;
  display: flex;
  justify-content: space-between;
`;

const FooterLink = styled(Link)`
  padding: 0 1.5em 3em 0;
  text-decoration: none;
  font-family: 'Montserrat', sans-serif;
`;


const FooterImg = styled.img`
  width: 48px;
`;

export default function Footer(props) {
  
  return (
    <StyledFooter>
      {/* <FooterContainer> */}
        <FooterLink to={props.nextUrl}>
          <FooterImg src={arrow_icon} />
        </FooterLink>
      {/* </FooterContainer> */}
    </StyledFooter>
  );
}
