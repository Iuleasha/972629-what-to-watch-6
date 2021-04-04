import React from 'react';
import {render} from '@testing-library/react';
import {filmAdapter} from '../../adapters/films';
import {FILM_MOCK} from '../../constants/mock';
import Details from './details';

test(`Should Details render correctly`, () => {
  const {container} = render(<Details film={filmAdapter(FILM_MOCK)}/>);
  expect(container).toMatchSnapshot();
});
