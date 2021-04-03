import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {createMemoryHistory} from 'history';
import React from 'react';
import * as redux from 'react-redux';
import {Router} from 'react-router-dom';
import configureStore from 'redux-mock-store';
import {SignIn} from './sign-in';

const mockStore = configureStore({});

it(`Render 'AuthScreen' when user navigate to '/login' url`, () => {
  const history = createMemoryHistory();
  history.push(`/login`);

  render(
      <redux.Provider store={mockStore({})}>
        <Router history={history}>
          <SignIn/>
        </Router>
      </redux.Provider>,
  );

  expect(screen.getByText(/Sign in/i)).toBeInTheDocument();

  userEvent.type(screen.getByTestId(`email`), `test@test.ru`);
  userEvent.type(screen.getByTestId(`password`), `123456`);

  expect(screen.getByDisplayValue(/keks/i)).toBeInTheDocument();
  expect(screen.getByDisplayValue(/test@test.ru/i)).toBeInTheDocument();
});

