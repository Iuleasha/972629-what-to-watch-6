import {createMemoryHistory} from 'history';
import React from 'react';
import {render} from '@testing-library/react';
import {Router} from 'react-router-dom';
import Footer from './footer';

test(`Should Footer render correctly`, () => {
  const history = createMemoryHistory();
  const {container} = render(<Router history={history}><Footer /></Router>);

  expect(container).toMatchSnapshot();
});
