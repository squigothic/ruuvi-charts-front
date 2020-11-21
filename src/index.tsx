import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createGlobalStyle } from 'styled-components';
import { createBrowserHistory, Location } from 'history';

import App from './App';
import store from './store';
import routes from './routes/routes';
import createRouter from './routes/router';

const GlobalStyle = createGlobalStyle`
  html {
    height: 100%;
  }
  body {
    height: 100%;
  }
`;

const history = createBrowserHistory();

const router = createRouter(routes);

const renderPage = async (location: Location) => {
  const route = await router.resolve(history.location);
  console.log('ROUTE: ', route);
  ReactDOM.render(
    <Provider store={store}>
      <GlobalStyle />
      <App>{route}</App>
    </Provider>,
    document.getElementById('root')
  );
};

history.listen(({ location, action }) => {
  console.log('Locationaction: ', action);
  renderPage(location);
});

renderPage(history.location);
