import {render} from '@testing-library/react';
import React from 'react';
import {adaptFilmData} from '../../adapters/films';
import {FILM_MOCK} from '../../constants/mock';
import Tabs from './tabs';

test(`Should Tabs render correctly`, () => {
  const {container} = render(<Tabs film={adaptFilmData(FILM_MOCK)}/>);
  expect(container).toMatchSnapshot();
});
