import {render} from '@testing-library/react';
import {createMemoryHistory} from 'history';
import React from 'react';
import {Router} from 'react-router-dom';
import {filmAdapter} from '../../adapters/films';
import {FILM_MOCK} from '../../constants/mock';
import SmallMovieCard from './small-movie-card';

test(`Should Tabs render correctly`, () => {
  const history = createMemoryHistory();
  const {container} = render(
      <Router history={history}>
        <SmallMovieCard film={filmAdapter(FILM_MOCK)}/>
      </Router>
  );
  expect(container).toMatchSnapshot();
});
