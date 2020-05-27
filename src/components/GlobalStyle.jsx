import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import px2vw from '../utils/px2vw';

const GlobalStyle = createGlobalStyle`
  ${reset}

  :root {
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
  }

  *,
  ::before,
  ::after {
    box-sizing: inherit;
  }

  html {
    font-size: 62.5%;
    height: 100%;
  } 

  body,
  #root {
    height: 100%;
    font-size: 1.6rem;
  }
`;

export default GlobalStyle;
