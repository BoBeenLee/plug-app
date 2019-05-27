import React from 'react';
import { Component } from 'react';
import { Provider } from "mobx-react";

import { BrowserRouter as Router } from "react-router-dom";
import Routes from '../Routes';
import { History } from 'history';
import { getRootStore } from '../store/Store';

type Props = {
  history: History<any>;
};

const store = getRootStore();

export default class Root extends Component<Props> {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Routes />
        </Router>
      </Provider>
    );
  }
}
