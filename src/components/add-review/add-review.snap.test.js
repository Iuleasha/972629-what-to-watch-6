import {render} from '@testing-library/react';
import {createMemoryHistory} from 'history';
import React from 'react';
import {Provider} from 'react-redux';
import {Router} from 'react-router-dom';
import {configureStore} from '@reduxjs/toolkit';
import {filmsAdapter} from '../../adapters/films';
import {FILM_MOCK} from '../../constants/mock';
import {loadFilms} from '../../store/action';
import reducer from '../../store/root-reducer';
import AddReview from './add-review';

const store = configureStore({reducer});

store.dispatch((dispatch) => dispatch(loadFilms(filmsAdapter([FILM_MOCK]))));

test(`Should AddReview render correctly`, () => {
  const history = createMemoryHistory();
  const props = {match: {params: {id: `1`}}};

  const {container} = render(
      <Provider store={store}>
        <Router history={history}>
          <AddReview {...props} />
        </Router>
      </Provider>,
  );
  expect(container).toMatchSnapshot();
});
