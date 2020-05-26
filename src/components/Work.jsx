import React from 'react';
import styled, { keyframes } from 'styled-components';
import { slideInDown } from 'react-animations';

import theRecipeBox_img from '../assets/projects/theRecipeBox.png';
import theWeatherGenie_img from '../assets/projects/theWeatherGenie.png';
import supernovaGems_img from '../assets/projects/supernovaGems.png';
import cathay22_img from '../assets/projects/cathay22.png';
import superhero_img from '../assets/projects/superhero.png';
import Skills from './Skills';
import LinkGithub from './LinkGithub';

const StyledWork = styled.section`
  animation: 2s ${keyframes`${slideInDown}`};
  overflow: auto;
  overflow-x: hidden;
  
  /* padding: 1.3em 2em; */
  padding: 1.6em 2em 2em 1.2em;
`;

const ProjectTitle = styled.h1`
  font-size: 1.2em;
  text-align: center;
  padding: .7em 0;
`;

const ProjectFrame = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: auto auto auto;
`;

const ProjectImg = styled.img`
  width: 20em;
`;

const ProjectLink = styled.a`
  text-decoration: none;
  text-align: center;
`;

const ProjectDesc = styled.p`
  /* width: 180px; */
  width: 365px;
  display: flex;
  align-items: center;
  font-family: 'Montserrat', sans-serif;
  font-size: .8em;
  padding: 0 1em 1.5em 1em;
  color: black;
  /* text-align: center; */
  /* width: 24em; */
`;


export default function Work() {
  const theRecipeBox_link = 'https://therecipesbox.netlify.app/';
  const cathay22_link = 'https://cathay-22.netlify.app/';
  const supernovaGems_link = 'https://supernova-gems.netlify.app/';
  const theWeatherGenie_link = 'https://theweathergenie.netlify.app/';
  const superhero_link = 'http://bumpy-expert.surge.sh/';

  return (
    <StyledWork>
      <ProjectTitle>PORTFOLIO</ProjectTitle>
      <ProjectFrame>

        <ProjectLink href={theRecipeBox_link}>
          <ProjectImg src={theRecipeBox_img} alt="theRecipeBox" />
          <ProjectDesc>
            <LinkGithub link='https://github.com/kaych26/theRecipeBox' />
            theRecipeBox, a full CRUD app for users to share recipe and stories and allowing families to connect throught food.  Developed in React, react router, ruby on rails.
          </ProjectDesc>
        </ProjectLink>

        <ProjectLink href={cathay22_link}>
          <ProjectImg src={cathay22_img} alt="Cathay22" />
          <ProjectDesc>
            <LinkGithub link='https://github.com/CherelleTownes/cathay-22' />
            Cathay22, a React applicaton devloped with UX collaboration for a local Chinese restaurant.
          </ProjectDesc>
        </ProjectLink>

        <ProjectLink href={supernovaGems_link}>
          <ProjectImg src={supernovaGems_img} alt="SupernovaGems" />
          <ProjectDesc>
            <LinkGithub link='https://github.com/Scott-PG/supernova-gems' />
            SuperNovaGems, a Fullstack ecommerce app developed in React and MongoDB.
          </ProjectDesc>
        </ProjectLink>

        <ProjectLink href={theWeatherGenie_link}>
          <ProjectImg
            src={theWeatherGenie_img} alt="theWeatherGenie" />
          <ProjectDesc>
            <LinkGithub link='https://github.com/kaych26/theWeatherGenie' />
            theWeatherGenie, developed using HTML, CSS and Openweather API.
          </ProjectDesc>
        </ProjectLink>

        <ProjectLink href={superhero_link}>
          <ProjectImg src={superhero_img} alt="superhero" />
          <ProjectDesc>
            <LinkGithub link='https://github.com/kaych26/Superheros' />
            Superhero, developed using HTML, CSS and Marvel API.
          </ProjectDesc>
        </ProjectLink>
        <Skills />
      </ProjectFrame>
    </StyledWork>
  );
}
