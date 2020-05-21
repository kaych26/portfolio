import React from 'react';
import { Route } from 'react-router-dom';
import GlobalStyle from './components/GlobalStyle';
import Hero from './components/Hero';
import Header from './components/Header';
import Body from './components/Body';
import Home from './components/Home';
import Contact from './components/Contact';
import Footer from './components/Footer';
// import Hero from './components/Hero';
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
          <Route exact path="/contact">
            <Contact />
          </Route>
        </Body>

        <Footer />
      </Hero>
    </>
  );
}

// function App() {
//   return (
//     <>
//       <GlobalStyle />
//       <Main></Main>
//     </>
//   );
// }

export default App;
