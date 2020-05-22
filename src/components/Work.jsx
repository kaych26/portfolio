import React from 'react';
import styled from 'styled-components';

const StyledWork = styled.section``;

const ProjectTitle = styled.h1`
  font-size: 1.5em;
`;

const ProjectImg = styled.img``;

const ProjectLink = styled.a``;

export default function Work() {
  const theRecipeBox_link = 'https://therecipesbox.netlify.app/';
  const cathay22_link = 'https://cathay-22.netlify.app/';
  const supernovaGem_link = 'https://supernova-gems.netlify.app/';
  const theWeatherGenie_link = 'https://theweathergenie.netlify.app/';
  const superhero_link = 'http://bumpy-expert.surge.sh/';

  return (
    <StyledWork>
      <ProjectTitle>Work</ProjectTitle>
      <ProjectLink href={theRecipeBox_link}></ProjectLink>
    </StyledWork>
  );
}
