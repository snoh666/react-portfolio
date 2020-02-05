import React from 'react';

import store from './redux';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Welcome from './components/Welcome';
import About from './components/About';
import CommercialProjects from './components/CommercialPrjs';
import GitProjects from './components/GitProjects';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <Switch>
          <Route path="/">
            <section>
              <Welcome />
            </section>
            <section>
              <About />
            </section>
            <section>
              <CommercialProjects />
            </section>
            <section>
              <GitProjects />
            </section>
          </Route>
        </Switch>
        <footer>
          <Footer />
        </footer>
      </Router>
    </Provider>
  );
}

export default App;
