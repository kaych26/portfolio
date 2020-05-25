import React from 'react';
import styled, { keyframes } from 'styled-components';
import { jello, flipInY, rotateInDownRight, flip, fadeInUp, fadeInRight, slideInUp, rotateIn, slideInDown, swing, zoomInDown, zoomIn, zoomInUp, slideIn, rotateInDownLeft, slideInLeft, slideInRight, fadeIn } from 'react-animations';

// import { motion, AnimatePresence } from 'framer-motion';
// import resume from '../assets/kayResume.jpg';


import PostIt from './PostIt';
import AboutMoi from './AboutMoi';
import AboutSidebar from './AboutSidebar';


const StyledAbout = styled.section`
  display: flex;
  /* flex-direction: column; */
  align-items: center;
  justify-content: space-around;
  font-family: 'Shadows Into Light Two', cursive;
`;

// const AboutTitle = styled.h1`

//   /* animation: 2s ${keyframes`${slideInLeft}`}; */
//   font-size: 1.5em;
//   padding: 2em 0 1em 0;
//   /* padding: 2.8em 0 2.5em 0; */
//   letter-spacing: .1em;
//   font-weight: 600;

// `;

// const AboutTitle2 = styled(AboutTitle)`
//   animation: 2s ${keyframes`${fadeIn}`};
//   /* animation: 8s ${keyframes`${rotateIn}`}; */
//   padding: 0 0 2em 0;
//   font-weight: normal;
//   /* transition-delay: 5s;
//   transition-duration: 2; */
// `;


const AboutPostItFrame = styled.div`
  /* animation: ${props => props.time} ${keyframes`${fadeIn}`}; */
  /* animation: 2s ${keyframes`${fadeIn}`}; */
  /* display: flex; */
  align-content: space-between;
`;

const PostItFrame = styled.div`
  animation: ${props => props.time} ${keyframes`${slideInLeft}`};    
  /* animation: ${props => props.time} ${keyframes`${jello}`};     */
`;
const PostItFrame2 = styled.div`
  animation: ${props => props.time} ${keyframes`${slideInUp}`};    
  /* animation: ${props => props.time} ${keyframes`${jello}`};     */
`;
const PostItFrame3 = styled.div`
  animation: ${props => props.time} ${keyframes`${slideInRight}`};    
  /* animation: ${props => props.time} ${keyframes`${jello}`};     */
`;

const PostItTitle = styled.h3`
text-align: center;
  padding-bottom: .3em;
  font-weight: 800;
  color: #ff69b4;
`;

const PostItList = styled.p`
  padding-bottom: .6em;
  font-size: .8em;
  text-align: center;
`;


export default function About() {

  const title = 'To Do';
  const myPassions = [
    'Keep hacking, keep exploring & stay inspired!'
  ];


  return (
    <StyledAbout>
      <AboutSidebar>
      </AboutSidebar>
      <AboutMoi />
     
        <AboutPostItFrame>

          {/* <PostItFrame2 time='2.5s'>
            
            <PostIt rotate='-2deg' size='150px'>
              <PostItTitle>
                {title}
              </PostItTitle>
              {myPassions.map((passion, idx) =>
                <PostItList key={idx}>
                  {passion}
                </PostItList>

              )}
            </PostIt>
          </PostItFrame2> */}



        </AboutPostItFrame>


    </StyledAbout>
  );
}
