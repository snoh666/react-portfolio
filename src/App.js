import React from 'react';

import store from './redux';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Welcome from './components/Welcome';
import About from './components/About';
import Offers from './components/Offers';
import {ThemeProvider} from 'styled-components';

function App() {

  const themeProps = {
    black: '#030303',
    grey: '#707070',
    white: '#FFFFFF',
    Montserrat: '\'Montserrat\', sans-serif',
    Roboto: '\'Roboto Condensed\', sans-serif'
  }

  return (
    <Provider store={store}>
      <ThemeProvider theme={themeProps}>
        <Router>
          <nav>
            <Header />
          </nav>
          <Switch>
            <Route path="/">
              <section>
                <Welcome />
              </section>
              <section>
                <About />
              </section>
              <section>
                <Offers />
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
