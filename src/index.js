import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {applyMiddleware, createStore} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import App from './components/app/app';
import {createAPI} from './services/api';
import {ActionCreator} from './store/action';
import {checkAuth, fetchFilmsList} from './store/api-actions';
import {redirect} from './store/middlewares/redirect';
import {reducer} from './store/reducer';
import {AuthorizationStatus} from './constant';

const api = createAPI(
    () => store.dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.NO_AUTH))
);

const store = createStore(
    reducer,
    composeWithDevTools(
        applyMiddleware(thunk.withExtraArgument(api)),
        applyMiddleware(redirect)
    )
);

store.dispatch((dispatch)=>Promise.all([
  dispatch(checkAuth()),
  dispatch(fetchFilmsList()),
]));

ReactDOM.render(
    <Provider store={store}>
      <App/>
    </Provider>,
    document.querySelector(`#root`),
);
