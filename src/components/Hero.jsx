import React from 'react';
import { Route } from 'react-router-dom';
import styled from 'styled-components';
import hero_img from '../assets/heros/BG_white_floor.png';

import Header from './Header';
import Body from './Body';
import Contact from './Contact';
import Footer from './Footer';

const StyledHero = styled.section`
  background-image: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(192, 192, 192, 0.6)
    ),
    url(${hero_img});
  background-size: cover;
  height: 771px;

  /* display: grid; */
  /* display: flex;
  flex-direction: column;
  justify-content: space-between; */
`;

export default function Hero(props) {
  return <StyledHero>{props.children}</StyledHero>;
}
