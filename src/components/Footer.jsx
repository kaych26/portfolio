import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';
import arrow_right_icon from '../assets/icons/arrow_right.svg';
import arrow_left_icon from '../assets/icons/arrow_left.svg';
import { merge, flash, lightSpeedIn, slideInLeft, slideInRight} from 'react-animations';


const slideSpeed = merge(slideInLeft, lightSpeedIn);

const StyledFooter = styled.section`

  /* animation: 2s ${keyframes`${slideInLeft}`}; */

  width: 100%;
  position: fixed;
  bottom: 0px;


  z-index: auto;
  display: flex;
  /* justify-content: flex-end; */
  justify-content: space-between;
  /* justify-content: center; */

  padding: 3em 15em;
`;


const FooterRightContainer = styled.div`
animation: 2s ${keyframes`${slideInLeft}`};
  
`;

const FooterLeftContainer = styled.div`
animation: 2s ${keyframes`${slideInRight}`};
 
`;

const FooterLink = styled(Link)`
  /* animation: 2s ${keyframes`${slideInLeft}`}; */
  /* padding: 0 0em 3em 5em;; */
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
