import React from 'react';
import styled from 'styled-components';
import hero_img from '../assets/heros/BG_white_floor.png';

import Header from './Header';
import Home from './Home';
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

export default function Main() {
  return (
    <StyledHero>
      <Header />
      <Home />
      <Footer />
    </StyledHero>
  );
}
