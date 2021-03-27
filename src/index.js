import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import App from './components/app/app';
import films from './mocks/films';
import {ActionCreator} from './store/action';
import {reducer} from './store/reducer';

const store = createStore(
    reducer, composeWithDevTools(),
);

store.dispatch(ActionCreator.saveFilms(films));

ReactDOM.render(
    <Provider store={store}>
      <App/>
    </Provider>,
    document.querySelector(`#root`),
);
