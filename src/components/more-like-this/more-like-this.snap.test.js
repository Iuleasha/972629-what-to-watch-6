import {render} from '@testing-library/react';
import {createMemoryHistory} from 'history';
import React from 'react';
import {Router} from 'react-router-dom';
import {filmsAdapter} from '../../adapters/films';
import {FILM_MOCK} from '../../constants/mock';
import MoreLikeThis from './more-like-this';

test(`Should MoreLikeThis render correctly`, () => {
  const history = createMemoryHistory();

  const {container} = render(<Router history={history}>
    <MoreLikeThis films={filmsAdapter([FILM_MOCK])}/>
  </Router>);
  expect(container).toMatchSnapshot();
});
