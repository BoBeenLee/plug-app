import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import App from './App';
import { createHashHistory } from 'history';
import './global.css';

const history = createHashHistory();

render(
  <AppContainer>
    <App history={history} />
  </AppContainer>,
  document.getElementById('root')
);

if ((module as any).hot) {
  (module as any).hot.accept('./App', () => {
    // eslint-disable-next-line global-require
    const NextApp = require('./App').default;
    render(
      <AppContainer>
        <NextApp history={history} />
      </AppContainer>,
      document.getElementById('root')
    );
  });
}
