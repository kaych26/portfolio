import React from 'react';
import { Route } from 'react-router-dom';
import GlobalStyle from './components/GlobalStyle';
// import Global from './components/Global';
import Hero from './components/Hero';
import Header from './components/Header';
import Body from './components/Body';
import Home from './components/Home';
import About from './components/About';
import Resume from './components/Resume';
import Skills from './components/Skills';

import Work from './components/Work';
import Footer from './components/Footer';
import size from './components/size';

function App() {
  return (
    <>
      <Hero>
        <GlobalStyle />
        {/* <Global /> */}

          <Route
            path='/'
            render={route => (<Header {...route} />)}
          />
          <Body>

            <Route exact
              path="/"
              render={route => (
                <>
                  <Home />
                  <Footer {...route} nextUrl="/about" /> </>)}
            />
            <Route exact
              path="/about"
              render={route => (
                <>
                  <About />
                  <Footer {...route} prevUrl="/" nextUrl="/work" />
                </>
              )}
            />

            <Route exact
              path="/work"
              render={route => (
                <>
                  <Work />
                  <Footer {...route} prevUrl="about" nextUrl="/resume" />
                </>
              )}
            />
            <Route exact
              path="/resume"
              render={route => (
                <>
                  <Resume />
                  <Footer {...route} prevUrl="work" nextUrl="/" />
                </>
              )}
            />

          </Body>

      </Hero>
    </>
  );
}

export default App;
