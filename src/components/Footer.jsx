import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';
import arrow_right_icon from '../assets/icons/arrow_right.svg';
import arrow_left_icon from '../assets/icons/arrow_left.svg';
import { merge, flash, lightSpeedIn, slideInLeft, slideInRight } from 'react-animations';
import size from './size';
import Copyright from './Copyright';

const StyledFooter = styled.section`
  /* animation: 2s ${keyframes`${slideInLeft}`}; */

  width: 100%;
  
  padding: 0em 4em .5em 15em; 
  /* height: 10px; */
  z-index: 1;

  display: flex;
  justify-content: space-between;

  @media (max-width: ${size.tablet_max}) {
    padding: 3em 6em;
  }

  @media (max-width: ${size.mobile}) {
    padding: 3em .5em;
  }
`;

const FooterRightContainer = styled.div`
  animation: 2s ${keyframes`${slideInLeft}`};
`;

const FooterLeftContainer = styled.div`
  animation: 2s ${keyframes`${slideInRight}`};
`;

const FooterLink = styled(Link)`
  /* animation: 2s ${keyframes`${slideInLeft}`}; */
  text-decoration: none;
  font-family: 'Montserrat', sans-serif;
`;

const FooterImg = styled.img`
  width: 48px;
`;

const CopyrightFrame = styled.div`
  text-align: right;
  padding: 0em 1.5em 1em 0;
`;


export default function Footer(props) {

  return (
    <>
      <StyledFooter>
        <FooterRightContainer>
          <FooterLink to={props.prevUrl}>
            <FooterImg src={arrow_left_icon} />
          </FooterLink>

        </FooterRightContainer>

        <FooterLeftContainer>
          <FooterLink to={props.nextUrl}>
            <FooterImg src={arrow_right_icon} />
          </FooterLink>
        </FooterLeftContainer>
      </StyledFooter>
      <CopyrightFrame>
        <Copyright />
      </CopyrightFrame>

    </>
  );
}
