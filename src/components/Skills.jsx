import React from 'react';
import styled from 'styled-components';

import react_img from '../assets/skills/react2.png';
import rails_img from '../assets/skills/rails.svg';
import postgresql_img from '../assets/skills/postgresql_elephant.png';
import nodejs_img from '../assets/skills/nodejs.svg';
import mongodb_img from '../assets/skills/mongodb.svg';
import javascript_img from '../assets/skills/javascript.png';
import html_img from '../assets/skills/html5.svg';
import cplus_img from '../assets/skills/cplus.png';
import css_img from '../assets/skills/css.svg';
// import c_img from '../assets/skills/c.svg';
// import cplus_img from '../assets/skills/cplus.svg';
import github_img from '../assets/skills/github.png';
import mongoose_img from '../assets/skills/mongoose.png';

const StyledSkills = styled.section`
  /* flex: display;
  flex-direction: column; */
  /* flex-direction: rows;

  justify-content: center;
  align-items: center; */

  /* background-color: green;
  display: grid;
  grid-template-rows: auto;
  grid-template-columns: auto; */
  
  /* grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr; */
  /* grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-template-areas: 
  'SkillImg  SkillImg SkillImg' */

  display: flex;
  justify-content: center;
  align-items: center;
`;

const SkillFrame = styled.div`
/* width: 120px; */
/* width: 80%; */
/* flex: display;
flex-direction: column;
  justify-content: center;
  align-items: center;
  align-self: center;
  background-color: red; */

/* padding-top: 5em;
  display: grid;

  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: auto;
  grid-template-areas: 
  'SkillImg  SkillImg SkillImg' */
  /* display: flex;
  justify-content: center;
  align-items: center; */
  padding: 4.5em .5em 2em .5em;
`;


const SkillImg = styled.img`
width: 60px;

  /* width: ${(props) => props.width}px; */
  /* padding: 0 .5em; */

`;


export default function Skills() {
  return (
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


      {/* <SkillImg className='skill'
          src={react_img} alt='react' width='70' />

        <SkillImg
          src={javascript_img} alt='js' width='60' />
        <SkillImg
          src={html_img} alt='html' width='50' />
        <SkillImg
          src={css_img} alt='css' width='50' />
        <SkillImg
          src={nodejs_img} alt='nodejs' width='80' />
        <SkillImg
          src={mongodb_img} alt='mongoDB' width='140' />
        <SkillImg
          src={mongoose_img} alt='mongoose' width='100' />
        <SkillImg
          src={postgresql_img} alt='postgresql' width='55' />
        <SkillImg
          src={rails_img} alt='rails' width='90' />

        <SkillImg
          src={cplus_img} alt='c++' width='80' />
        <SkillImg
          src={github_img} alt='git' width='60' />  */}
    

    </StyledSkills >
  )
}