import React from 'react';

import store from './redux';
import { Provider } from 'react-redux';
import { Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path="/">

          </Route>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
