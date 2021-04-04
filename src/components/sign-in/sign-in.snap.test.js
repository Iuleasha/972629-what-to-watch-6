import {configureStore} from '@reduxjs/toolkit';
import {render} from '@testing-library/react';
import {createMemoryHistory} from 'history';
import React from 'react';
import {Provider} from 'react-redux';
import {Router} from 'react-router-dom';
import reducer from '../../store/root-reducer';
import SignIn from './sign-in';

const store = configureStore({reducer});

test(`Should SignIn render correctly`, () => {
  const history = createMemoryHistory();

  const {container} = render(
      <Provider store={store}>
        <Router history={history}>
          <SignIn/>
        </Router>
      </Provider>);
  expect(container).toMatchSnapshot();
});
