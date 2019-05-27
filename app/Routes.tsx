import React from 'react';
import { Switch, Route } from 'react-router';

import { Routes } from './constants/Routes';
import HomePage from './pages/HomePage';

export default () => (
  <Switch>
    <Route path={Routes.HOME} component={HomePage} />
  </Switch>
);
