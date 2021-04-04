import {render} from '@testing-library/react';
import React from 'react';
import {filmAdapter} from '../../adapters/films';
import {FILM_MOCK} from '../../constants/mock';
import Overview from './overview';

test(`Should Overview render correctly`, () => {
  const {container} = render(<Overview film={filmAdapter(FILM_MOCK)}/>);
  expect(container).toMatchSnapshot();
});
