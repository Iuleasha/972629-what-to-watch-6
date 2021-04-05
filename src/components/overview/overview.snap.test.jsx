import {render} from '@testing-library/react';
import React from 'react';
import {adaptFilmData} from '../../adapters/films';
import {FILM_MOCK} from '../../constants/mock';
import Overview from './overview';

test(`Should Overview render correctly`, () => {
  const {container} = render(<Overview film={adaptFilmData(FILM_MOCK)}/>);
  expect(container).toMatchSnapshot();
});
