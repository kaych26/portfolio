import React from 'react';
import styled from 'styled-components';
import hero_img from '../assets/heros/BG_white_floor.png';

const StyledHero = styled.section`
  background-image: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(192, 192, 192, 0.6)
    ),
    url(${hero_img});
  background-size: cover;
  /* height: 600px; */
  height: 771px;
  z-index: -100;
`;

export default function Hero(props) {
  return <StyledHero>{props.children}</StyledHero>;
}
