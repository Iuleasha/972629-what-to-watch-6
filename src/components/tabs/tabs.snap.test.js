import React from 'react';
import {render} from '@testing-library/react';
import {filmAdapter} from '../../adapters/films';
import {FILM_MOCK} from '../../constants/mock';
import Tabs from './tabs';

test(`Should Tabs render correctly`, () => {
  const {container} = render(<Tabs film={filmAdapter(FILM_MOCK)}/>);
  expect(container).toMatchSnapshot();
});
