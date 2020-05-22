import React from 'react';
import { Route } from 'react-router-dom';
import GlobalStyle from './components/GlobalStyle';
import Hero from './components/Hero';
import Header from './components/Header';
import Body from './components/Body';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Work from './components/Work';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <GlobalStyle />
      <Hero>
        <Header />
        <Body>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/work">
            <Work />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
        </Body>

        <Footer />
      </Hero>
    </>
  );
}


export default App;
