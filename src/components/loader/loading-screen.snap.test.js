import {render} from '@testing-library/react';
import React from 'react';
import Loader from './loading-screen';

test(`Should LoadingScreen render correctly`, () => {
  const {container} = render(<Loader/>);
  expect(container).toMatchSnapshot();
});
