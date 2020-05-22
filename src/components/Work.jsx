import React from 'react';
import styled from 'styled-components';
import theRecipeBox_img from '../assets/projects/theRecipeBox.png';
import theWeatherGenie_img from '../assets/projects/theWeatherGenie.png';
import supernovaGems_img from '../assets/projects/supernovaGems.png';
import cathay22_img from '../assets/projects/cathay22.png';
import superhero_img from '../assets/projects/superhero.png';

const StyledWork = styled.section`
  /* display: absolute; */
  /* overflow: auto; */
  /* display: flex;
  flex-direction: column;
  align-items: center; */
  /* align-content: center; */
`;

const ProjectTitle = styled.h1`
text-align: center;
  font-size: 1.8em;
  /* padding-bottom: .3em; */
`;

const ProjectFrame = styled.div`
display: flex;
  height: 400px;
  flex-direction: column;
  align-items: center;
  overflow: auto;
  /* height: 60%;
  width: 80%; */
  /* overflow: auto; */
`;

const ProjectImg = styled.img`
  width: 40em;
  padding: 2em;
/* align-self: center; */
`;

const ProjectLink = styled.a``;

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
          <ProjectImg src={theRecipeBox_img} alt="theRecipeBox"></ProjectImg>
        </ProjectLink>
        <ProjectLink href={cathay22_link}>
          <ProjectImg src={cathay22_img} alt="Cathay22"></ProjectImg>
        </ProjectLink>
        <ProjectLink href={supernovaGems_link}>
          <ProjectImg src={supernovaGems_img} alt="SupernovaGems"></ProjectImg>
        </ProjectLink>
        <ProjectLink href={theWeatherGenie_link}>
          <ProjectImg
            src={theWeatherGenie_img}
            alt="theWeatherGenie"
          ></ProjectImg>
        </ProjectLink>
        <ProjectLink href={superhero_link}>
          <ProjectImg src={superhero_img} alt="SupernovaGems"></ProjectImg>
        </ProjectLink>
      </ProjectFrame>
    </StyledWork>
  );
}
