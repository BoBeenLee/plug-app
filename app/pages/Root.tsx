import * as React from 'react';
import { Component } from 'react';
import { ConnectedRouter } from 'connected-react-router';
import Routes from '../Routes';
import { History } from 'history';

type Props = {
  history: History<any>;
};

export default class Root extends Component<Props> {
  render() {
    const { history } = this.props;
    return (
      <ConnectedRouter history={history}>
        <Routes />
      </ConnectedRouter>
    );
  }
}
