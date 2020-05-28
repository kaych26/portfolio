import React from 'react';
import { Route } from 'react-router-dom';
import styled from 'styled-components';
import GlobalStyle from './components/GlobalStyle';
// import Global from './components/Global';
import Hero from './components/Hero';
import Header from './components/Header';
import Body from './components/Body';
import Home from './components/Home';
import About from './components/About';
import Resume from './components/Resume';
import Logo from './components/Logo';

import Work from './components/Work';
import Footer from './components/Footer';
import size from './components/size';

const pageFrame = styled.section`
  position: relative;
  /* height: 80%%; */
`;

const BodyFrame = styled.section`
  padding-bottom: 5rem;
  `;

const FooterFrame = styled.section`
  position: absolute;
  bottom: 0;
  width: 100%;
  /* height: 3.5rem; */
`;

function App() {
  return (
    <pageFrame>
      <Hero>
        <GlobalStyle />

        <Route
          path='/'
          render={route => (
            <>
              <Logo {...route} />
              <Header {...route} />
            </>)}
        />


        <Body>

          <Route exact
            path="/"
            render={route => (
              <>
                <BodyFrame>
                  <Home />
                </BodyFrame>
                <FooterFrame>
                  <Footer {...route} prevUrl="/resume" nextUrl="/about" />
                </FooterFrame>
              </>
            )}
          />
          <Route exact
            path="/about"
            render={route => (
              <>
                <BodyFrame>

                  <About />
                </BodyFrame>
                <FooterFrame>

                  <Footer {...route} prevUrl="/" nextUrl="/work" />
                </FooterFrame>
              </>
            )}
          />

          <Route exact
            path="/work"
            render={route => (
              <>
                <BodyFrame>

                  <Work />
                </BodyFrame>
                <FooterFrame>

                  <Footer {...route} prevUrl="about" nextUrl="/resume" />
                </FooterFrame>
              </>
            )}
          />
          <Route exact
            path="/resume"
            render={route => (
              <>
                <BodyFrame>

                  <Resume />
                </BodyFrame>
                <FooterFrame>

                  <Footer {...route} prevUrl="work" nextUrl="/" />
                </FooterFrame>
              </>
            )}
          />

        </Body>



      </Hero>
    </pageFrame>
  );
}

export default App;
