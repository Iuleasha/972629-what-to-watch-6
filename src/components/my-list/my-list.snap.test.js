import {configureStore} from '@reduxjs/toolkit';
import {render} from '@testing-library/react';
import {createMemoryHistory} from 'history';
import React from 'react';
import {Provider} from 'react-redux';
import {Router} from 'react-router-dom';
import {filmsAdapter} from '../../adapters/films';
import {FILM_MOCK} from '../../constants/mock';
import {loadFavorite} from '../../store/action';
import reducer from '../../store/root-reducer';
import MyList from './my-list';

const store = configureStore({reducer});

store.dispatch((dispatch) => dispatch(loadFavorite(filmsAdapter([FILM_MOCK]))));

test(`Should MyList render correctly`, () => {
  const history = createMemoryHistory();

  const {container} = render(<Provider store={store}>
    <Router history={history}>
      <MyList/>
    </Router>
  </Provider>);

  expect(container).toMatchSnapshot();
});
