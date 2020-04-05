import React, { useState } from 'react';

import store from './redux';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Welcome from './components/Welcome';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { ThemeProvider } from 'styled-components';

function App() {
  const [imageLoaded, setImageLoaded] = useState(false);

  const themeProps = {
    black: '#030303',
    grey: '#717171',
    white: '#FFFFFF',
    Montserrat: "'Montserrat', sans-serif",
    Roboto: "'Roboto Condensed', sans-serif",
  };

  return (
    <Provider store={store}>
      <ThemeProvider theme={themeProps}>
        <Router>
          <nav>
            <Header isLoaded={imageLoaded} />
          </nav>
          <Switch>
            <Route path='/'>
              <section>
                <Welcome setLoaded={setImageLoaded} />
              </section>
              <section>
                <About />
              </section>
              <section>
                <Projects />
              </section>
              <section>
                <Contact />
              </section>
            </Route>
          </Switch>
          <footer>
            <Footer />
          </footer>
        </Router>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
