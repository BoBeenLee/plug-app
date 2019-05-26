import * as React from 'react';
import { Switch, Route } from 'react-router';

import { Routes } from './constants/Routes';
import App from './pages/App';
import HomePage from './pages/HomePage';

export default () => (
  <App>
    <Switch>
      <Route path={Routes.HOME} component={HomePage} />
    </Switch>
  </App>
);
