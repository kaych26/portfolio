import React from 'react';
import styled from 'styled-components';
import icon from '../assets/icons/github.svg';

const StyledImgLink = styled.section`
  display: flex;
`;

const Link = styled.a`
  font-family: 'Montserrat', sans-serif;
  text-decoration: none;
  color: #000;
  font-size: .8em;
  display: flex;
  align-items: center;
`;

const Img = styled.img`
  width: 30px;
`;

export default function LinkPortfolioGit(props) {
  let link = 'https://github.com/kaych26/portfolio';

  if (props.link) {
    link = props.link;
  }

  return (
    <StyledImgLink>
      <Link
        href={link} target="_blank" rel="noopener noreferrer">
        <Img
          src={icon} alt='github' />
        {props.desc}
      </Link>

    </StyledImgLink>
  )
}