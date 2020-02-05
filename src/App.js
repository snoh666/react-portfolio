import React from 'react';

import store from './redux';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <Switch>
          <Route path="/">

          </Route>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
