import React from 'react';
import styled from 'styled-components';
import react_img from '../assets/skills/react2.png';
import rails_img from '../assets/skills/rails.svg';
import postgresql_img from '../assets/skills/postgresql_elephant.png';
import nodejs_img from '../assets/skills/nodejs.svg';
import mongodb_img from '../assets/skills/mongodb.svg';
import javascript_img from '../assets/skills/javascript.png';
import html_img from '../assets/skills/html5.svg';
import css_img from '../assets/skills/css.svg';
import c_img from '../assets/skills/c.svg';
import cplus_img from '../assets/skills/cplus.svg';
import github_img from '../assets/skills/github.png';

const StyledSkills = styled.section``;

const SkillImg = styled.img`
width: 90px;
`;


export default function Skills() {
  return (
    <StyledSkills>

      <SkillImg
        src={react_img} alt='react' />
      <SkillImg
        src={javascript_img} alt='js' />
      <SkillImg
        src={html_img} alt='html' />
      <SkillImg
        src={css_img} alt='css' />
      <SkillImg
        src={nodejs_img} alt='nodejs' />
      <SkillImg
        src={mongodb_img} alt='mongoDB' />
      <SkillImg
        src={postgresql_img} alt='postgresql' />
      <SkillImg
        src={rails_img} alt='rails' />
       <SkillImg
        src={c_img} alt='c' />
       <SkillImg
        src={cplus_img} alt='c++' />
      <SkillImg
        src={github_img} alt='git' />

    </StyledSkills>
  )
}