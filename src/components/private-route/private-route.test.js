import {configureStore} from '@reduxjs/toolkit';
import {render, screen} from '@testing-library/react';
import {createMemoryHistory} from 'history';
import React from 'react';
import {Provider} from 'react-redux';
import {Route, Router} from 'react-router-dom';
import {filmsAdapter} from '../../adapters/films';
import {AuthorizationStatus} from '../../constants/constant';
import {FILM_MOCK} from '../../constants/mock';
import {loadFilms, requireAuthorization} from '../../store/action';
import reducer from '../../store/root-reducer';
import PrivateRoute from './private-route';

const store = configureStore({reducer});

let history;

describe(`Test PrivateRouter`, () => {
  beforeEach(() => {
    history = createMemoryHistory();
    history.push(`/private`);
  });

  it(`Should be render component for public route, when user not authorized`, () => {
    store.dispatch((dispatch) => {
      dispatch(loadFilms(filmsAdapter([FILM_MOCK])));
      dispatch(requireAuthorization(AuthorizationStatus.NO_AUTH));
    });

    render(
        <Provider store={store}>
          <Router history={history}>
            <Route exact path="/login"><h1>Public Route</h1></Route>
            <PrivateRoute
              exact
              path="/private"
              render={() => (<h1>Private Route</h1>)}
            />
          </Router>
        </Provider>,
    );

    expect(screen.getByText(/Public Route/i)).toBeInTheDocument();
    expect(screen.queryByText(/Private Route/i)).not.toBeInTheDocument();
  });

  it(`Should be render component for private route, when user authorized`, () => {
    store.dispatch((dispatch) => {
      dispatch(requireAuthorization(AuthorizationStatus.AUTH));
      dispatch(loadFilms(filmsAdapter([FILM_MOCK])));
    });


    render(
        <Provider store={store}>
          <Router history={history}>
            <Route exact path="/login"><h1>Public Route</h1></Route>
            <PrivateRoute
              exact
              path="/private"
              render={() => (<h1>Private Route</h1>)}
            />
          </Router>
        </Provider>,
    );

    expect(screen.getByText(/Private Route/i)).toBeInTheDocument();
    expect(screen.queryByText(/Public Route/i)).not.toBeInTheDocument();
  });
});
