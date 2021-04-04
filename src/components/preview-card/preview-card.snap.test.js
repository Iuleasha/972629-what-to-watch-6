import {configureStore} from '@reduxjs/toolkit';
import {render} from '@testing-library/react';
import {createMemoryHistory} from 'history';
import React from 'react';
import {Provider} from 'react-redux';
import {Router} from 'react-router-dom';
import {filmAdapter} from '../../adapters/films';
import {FILM_MOCK} from '../../constants/mock';
import {loadPromoFilm} from '../../store/action';
import reducer from '../../store/root-reducer';
import PreviewCard from './preview-card';

const store = configureStore({reducer});

store.dispatch((dispatch) => dispatch(loadPromoFilm(filmAdapter(FILM_MOCK))));

test(`Should PreviewCard render correctly`, () => {
  const history = createMemoryHistory();

  const {container} = render(
      <Provider store={store}>
        <Router history={history}>
          <PreviewCard/>
        </Router>
      </Provider>,
  );
  expect(container).toMatchSnapshot();
});
