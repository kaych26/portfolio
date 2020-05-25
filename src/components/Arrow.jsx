import React from 'react';
import styled from 'styled-components';


// create small metal part of the pin
const StyledArrow = styled.i`

background-color: #aaa;
display: block;
/* height: 3px;
width: 32px; */
height: 32px;
width: 2px;
/* position: absolute; */
/* left: 50%;
top: -16px;
z-index: 1; */

/* using gradient and box shadow to make the ball top of the pin and its shadow */
:after {
  background-color: #A31;
  background-image: radial-gradient()(25% 25%, circle, hsla(0, 0%, 100%, .3), hsla(0, 0%, 0%, .3));

  border-radius: 50%;

  box-shadow: inset 0 0 0 1px hsla(0,0%, 0%, .1), 
  inset 3px 3px 3px hsla(0, 0%, 0%, .2),
  inset -3px -3px 3px hsla(0, 0%, 0%, .2),
  23px 20px 3px hsla(0, 0%, 0%, .15);

  content: '';
  height: 10px;
  left: -3px;
  position: absolute;
  top: -8px;
  width: 10px;
  /* content: '';
  height: 12px;
  left: -5px;
  position: absolute;
  top: -10px;
  width: 12px; */
  /* width: 12px; */
}

/* rotate the shadow of the metal part of the pin */

:before {
  background-color: hsla(0, 0%, 0%, 0.1);
  box-shadow: 0 0 .25em hsla(0,0%, 0%, .1);
  content: '';
  height: 24px;
  width: 2px;
  /* left: 0; */
  /* position: absolute; */
  /* top: 8px; */

  transform: rotate(57.5deg);
  transform-origin: 50% 100%;
}
`;



export default function Arrow() {
  return (

    <StyledArrow>
      
     

    </StyledArrow>
  )

}