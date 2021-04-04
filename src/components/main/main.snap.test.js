import {configureStore} from '@reduxjs/toolkit';
import {render} from '@testing-library/react';
import {createMemoryHistory} from 'history';
import React from 'react';
import {Provider} from 'react-redux';
import {Router} from 'react-router-dom';
import {filmAdapter, filmsAdapter} from '../../adapters/films';
import {FILM_MOCK} from '../../constants/mock';
import {loadFilms, loadPromoFilm} from '../../store/action';
import reducer from '../../store/root-reducer';
import MainPage from './main';

const store = configureStore({reducer});

store.dispatch((dispatch) => {
  dispatch(loadFilms(filmsAdapter([FILM_MOCK])));
  dispatch(loadPromoFilm(filmAdapter(FILM_MOCK)));
});

test(`Should MainPage render correctly`, () => {
  const history = createMemoryHistory();

  const {container} = render(
      <Provider store={store}>
        <Router history={history}>
          <MainPage/>
        </Router>
      </Provider>);

  expect(container).toMatchSnapshot();
});
