import {configureStore} from '@reduxjs/toolkit';
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {Router as BrowserRouter} from 'react-router-dom';
import browserHistory from './browser-history';
import App from './components/app/app';
import {AuthorizationStatus} from './constants/constant';
import {createAPI} from './services/api';
import {requireAuthorization} from './store/action';
import {checkAuth} from './store/api-actions';
import {redirect} from './store/middlewares/redirect';
import reducer from './store/root-reducer';

const api = createAPI(
    () => store.dispatch(requireAuthorization(AuthorizationStatus.NO_AUTH)),
);

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      },
    }).concat(redirect),
});

store.dispatch(checkAuth());

ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter history={browserHistory}>
        <App/>
      </BrowserRouter>
    </Provider>,
    document.querySelector(`#root`),
);
