import React from 'react';
import styled, { keyframes } from 'styled-components';
import { bounce, bounceInLeft, slideInDown, slideInLeft, fadeInRightBig, fadeInLeft, rollIn, rotateInDownLeft } from 'react-animations';

import react_img from '../assets/skills/react2.png';
import rails_img from '../assets/skills/rails.svg';
import postgresql_img from '../assets/skills/postgresql_elephant.png';
import nodejs_img from '../assets/skills/nodejs.svg';
import mongodb_img from '../assets/skills/mongodb.svg';
import javascript_img from '../assets/skills/javascript.png';
import html_img from '../assets/skills/html5.svg';
import cplus_img from '../assets/skills/cplus.png';
import css_img from '../assets/skills/css.svg';
import github_img from '../assets/skills/github.png';
import mongoose_img from '../assets/skills/mongoose.png';

const StyledSkills = styled.section`
animation: 3s ${keyframes`${slideInLeft}`} ;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SkillFrame = styled.div`
  /* animation: 5s ${keyframes`${bounceInLeft}`} ; */
  animation: 3s ${keyframes`${bounce}`} ;
  /* animation: 3s ${keyframes`${rotateInDownLeft}`} ; */
  /* animation: 5s ${keyframes`${fadeInLeft}`} ; */
  /* animation: 3s ${keyframes`${bounceInLeft}`} infinite ; */
  padding: 4.5em .5em 2em .5em;
`;


const Bounce = styled.div`animation: 2s ${keyframes`${bounceInLeft}`} infinite`;
// const SlideInDown = styled.div`animation: 2s ${keyframes`${slideInDown}`} `;
// const SlideInLeft = styled.div`animation: 2s ${keyframes`${slideInLeft}`} `;
const FadeInRightBig = styled.div`animation: 2s ${keyframes`${fadeInRightBig}`} `;


const SkillImg = styled.img`
width: 60px;

  /* width: ${(props) => props.width}px; */
  /* padding: 0 .5em; */

`;


export default function Skills() {
  return (

    // <SlideInLeft>
      <StyledSkills>
       
        <SkillFrame>
          <img
            src={react_img} alt='react' width='60px' />
        </SkillFrame>

        <SkillFrame>
          <img
            src={javascript_img} alt='js' width='50px' />
        </SkillFrame>

        <SkillFrame>
          <img
            src={html_img} alt='html' width='40px' />
        </SkillFrame>

        <SkillFrame>
          <img
            src={css_img} alt='css' width='40px' />
        </SkillFrame>

        <SkillFrame>
          <img
            src={nodejs_img} alt='nodejs' width='75px' />
        </SkillFrame>

        <SkillFrame>
          <img
            src={mongodb_img} alt='mongoDB' width='130px' />
        </SkillFrame>

        <SkillFrame>
          <img
            src={mongoose_img} alt='mongoose' width='90px' />
        </SkillFrame>

        <SkillFrame>
          <img
            src={postgresql_img} alt='postgresql' width='50px' />
        </SkillFrame>

        <SkillFrame>
          <img
            src={rails_img} alt='rails' width='80px' />
        </SkillFrame>

        <SkillFrame>
          <img
            src={cplus_img} alt='c++' width='70px' />
        </SkillFrame>

        <SkillFrame>
          <img
            src={github_img} alt='git' width='50px' />
        </SkillFrame>
      
      </StyledSkills >
    // </SlideInLeft>
  )
}