import _ from "lodash";
import React, { Component } from 'react';
import { Provider } from "mobx-react";
import { Switch, Route } from 'react-router';
import { BrowserRouter as Router } from "react-router-dom";

import { routes, IMenuProps } from './pages';
import { History } from 'history';
import { getRootStore } from './stores/Store';
import HomePage from "./pages/HomePage";

type Props = {
  history: History<any>;
};

const store = getRootStore();

class App extends Component<Props> {
  public render() {
    return (
      <Provider store={store}>
        <Router>
          <Switch>
            {this.renderRoutes(_.values(routes))}
            <Route component={HomePage} />
          </Switch>
        </Router>
      </Provider>
    );
  }

  private renderRoutes = (menus: IMenuProps[]) => {
    return _.map(menus, menu => {
      if (_.isEmpty(menu.menuItems)) {
        if (!menu.component) {
          return null;
        }
        return (
          <Route
            key={menu.id}
            path={menu.path}
            exact={menu.exact}
            component={menu.component}
          />
        );
      }
      return this.renderRoutes(menu.menuItems);
    });
  };
}

export default App;
