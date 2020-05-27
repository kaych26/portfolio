import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';
import arrow_right_icon from '../assets/icons/arrow_right.svg';
import arrow_left_icon from '../assets/icons/arrow_left.svg';
import { merge, flash, lightSpeedIn, slideInLeft, slideInRight} from 'react-animations';
import size from './size';

const StyledFooter = styled.section`
  /* animation: 2s ${keyframes`${slideInLeft}`}; */

  width: 100%;
  position: fixed;
  bottom: 0px;

  z-index: auto;
  display: flex;
  justify-content: space-between;
  padding: 3em 15em;

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

export default function Footer(props) {

  return (
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
  );
}
