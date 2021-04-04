import {render} from '@testing-library/react';
import React from 'react';
import {adaptFilmData} from '../../adapters/films';
import {FILM_MOCK} from '../../constants/mock';
import Details from './details';

test(`Should Details render correctly`, () => {
  const {container} = render(<Details film={adaptFilmData(FILM_MOCK)}/>);
  expect(container).toMatchSnapshot();
});
