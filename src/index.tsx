import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createGlobalStyle } from 'styled-components';
import { Location } from 'history';
import history from './utils/index';

import App from './App';
import store from './store';
import routes from './routes/routes';
import createRouter from './routes/router';
import { setUser } from './reducers/userReducer';

const GlobalStyle = createGlobalStyle`
  html {
    height: 100%;
  }
  body {
    height: 100%;
  }
`;

const getUserFromLocalStorage = () => {
  const savedUser = window.localStorage.getItem('user');
  if (savedUser) {
    store.dispatch(setUser(JSON.parse(savedUser)));
    return JSON.parse(savedUser);
  }
  return null;
};

const router = createRouter(routes, store);

const renderPage = async (location: Location) => {
  const { pathname } = location;
  const loggedInUser = await getUserFromLocalStorage();
  if (!loggedInUser && history.location.pathname !== '/login') {
    history.replace('/login');
    return;
  }
  const route = await router.resolve({ pathname, loggedInUser });
  ReactDOM.render(
    <Provider store={store}>
      <GlobalStyle />
      <App>{route}</App>
    </Provider>,
    document.getElementById('root')
  );
};

history.listen(({ location }) => {
  renderPage(location);
});

renderPage(history.location);
