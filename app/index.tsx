import * as React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import Root from './pages/Root';
import { createHashHistory } from 'history';
import './global.css';

const history = createHashHistory();

render(
  <AppContainer>
    <Root history={history} />
  </AppContainer>,
  document.getElementById('root')
);

if ((module as any).hot) {
  (module as any).hot.accept('./pages/Root', () => {
    // eslint-disable-next-line global-require
    const NextRoot = require('./pages/Root').default;
    render(
      <AppContainer>
        <NextRoot history={history} />
      </AppContainer>,
      document.getElementById('root')
    );
  });
}
