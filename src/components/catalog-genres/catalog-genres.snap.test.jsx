import {render} from '@testing-library/react';
import React from 'react';
import {DEFAULT_GENRE} from '../../constants/constant';
import CatalogGenres from './catalog-genres';

test(`Should CatalogGenres render correctly`, () => {
  const {container} = render(<CatalogGenres activeFilter={DEFAULT_GENRE} genres={[DEFAULT_GENRE]} onSelectGenre={() => {
  }}/>);
  expect(container).toMatchSnapshot();
});
