import React from 'react';
import styled, { keyframes } from 'styled-components';
import { slideInDown } from 'react-animations';

import theRecipeBox_img from '../assets/projects/theRecipeBox.png';
import theWeatherGenie_img from '../assets/projects/theWeatherGenie.png';
import supernovaGems_img from '../assets/projects/supernovaGems.png';
import cathay22_img from '../assets/projects/cathay22.png';
import superhero_img from '../assets/projects/superhero.png';

const StyledWork = styled.section`
 display: flex;
 flex-direction: column;
 align-items: center;
 
 animation: 3s ${keyframes`${slideInDown}`};
`;

const ProjectTitle = styled.h1`

  font-size: 1.8em;
  text-align: center;
  padding-bottom: .8em;
`;

const ProjectFrame = styled.div`
display: flex;
  width: 59%;
  flex-direction: row;
  align-items: flex-start;
  overflow: auto; 
`;

const ProjectImg = styled.img`
  width: 40em;
  
  padding: 0 15px 0 0;
  align-self: center;
`;

const ProjectLink = styled.a`
  text-decoration: none;
  text-align: center;

`;

const ProjectDesc = styled.p`

  font-size: 1em;
  padding: 0.5em 2em;

`;

export default function Work() {
  const theRecipeBox_link = 'https://therecipesbox.netlify.app/';
  const cathay22_link = 'https://cathay-22.netlify.app/';
  const supernovaGems_link = 'https://supernova-gems.netlify.app/';
  const theWeatherGenie_link = 'https://theweathergenie.netlify.app/';
  const superhero_link = 'http://bumpy-expert.surge.sh/';

  return (
    <StyledWork>
      <ProjectTitle>Work</ProjectTitle>
      <ProjectFrame>

        <ProjectLink href={theRecipeBox_link}>
          <ProjectImg src={theRecipeBox_img} alt="theRecipeBox" />
          <ProjectDesc>
            theRecipeBox, a full CRUD app for users to share recipe and stories and allowing families to connect throught food.  Developed in React, react router, ruby on rails.
          </ProjectDesc>
        </ProjectLink>

        <ProjectLink href={cathay22_link}>
          <ProjectImg src={cathay22_img} alt="Cathay22" />
          <ProjectDesc>
            Cathay22, a React applicaton devloped with UX collaboration for a local Chinese restaurant.
          </ProjectDesc>
        </ProjectLink>

        <ProjectLink href={supernovaGems_link}>
          <ProjectImg src={supernovaGems_img} alt="SupernovaGems" />
          <ProjectDesc>
            SuperNovaGems, a Fullstack ecommerce app developed in React and MongoDB.
          </ProjectDesc>
        </ProjectLink>

        <ProjectLink href={theWeatherGenie_link}>
          <ProjectImg
            src={theWeatherGenie_img} alt="theWeatherGenie" />
          <ProjectDesc>
            theWeatherGenie, developed using HTML, CSS and Openweather API.
          </ProjectDesc>
        </ProjectLink>

        <ProjectLink href={superhero_link}>
          <ProjectImg src={superhero_img} alt="superhero" />
          <ProjectDesc>
            Superhero, developed using HTML, CSS and Marvel API.
          </ProjectDesc>
        </ProjectLink>

      </ProjectFrame>
    </StyledWork>
  );
}
