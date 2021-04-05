import {render, screen} from '@testing-library/react';
import {createMemoryHistory} from 'history';
import React from 'react';
import * as redux from 'react-redux';
import {Router} from 'react-router-dom';
import {configureStore} from '@reduxjs/toolkit';
import {adaptFilmData, filmsAdapter} from '../../adapters/films';
import {adaptUserData} from '../../adapters/user';
import {AppRoute, AuthorizationStatus} from '../../constants/constant';
import {AUTH_INFO_MOCK, FILM_MOCK} from '../../constants/mock';
import {loadFavorite, loadFilms, loadPromoFilm, requireAuthorization, setUser} from '../../store/action';
import reducer from '../../store/root-reducer';
import App from './app';

const store = configureStore({reducer});

describe(`Test routing`, () => {
  jest.spyOn(redux, `useSelector`);
  jest.spyOn(redux, `useDispatch`);

  it(`Render 'MainPage'`, () => {
    const history = createMemoryHistory();

    store.dispatch((dispatch) => {
      dispatch(loadFilms(filmsAdapter([FILM_MOCK])));
      dispatch(loadPromoFilm(adaptFilmData(FILM_MOCK)));
    });

    history.push(AppRoute.ROOT);

    render(
        <redux.Provider store={store}>
          <Router history={history}>
            <App/>
          </Router>
        </redux.Provider>,
    );

    expect(screen.getAllByText(FILM_MOCK.name)).toBeDefined();
    expect(screen.getAllByText(FILM_MOCK.genre)).toBeDefined();
    expect(screen.getByText(FILM_MOCK.released)).toBeInTheDocument();
  });

  it(`Render 'SignIn Page'`, () => {
    const history = createMemoryHistory();

    history.push(AppRoute.LOGIN);

    render(
        <redux.Provider store={store}>
          <Router history={history}>
            <App/>
          </Router>
        </redux.Provider>,
    );

    expect(screen.getByLabelText(/Email address/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Password/i)).toBeInTheDocument();
  });

  it(`Render 'My List Page'`, () => {
    const history = createMemoryHistory();

    store.dispatch((dispatch) => {
      dispatch(setUser(adaptUserData(AUTH_INFO_MOCK)));
      dispatch(loadFilms(filmsAdapter([FILM_MOCK])));
      dispatch(requireAuthorization(AuthorizationStatus.AUTH));
      dispatch(loadFavorite(filmsAdapter([FILM_MOCK])));
    });

    history.push(AppRoute.MY_LIST);

    render(
        <redux.Provider store={store}>
          <Router history={history}>
            <App/>
          </Router>
        </redux.Provider>,
    );

    expect(screen.getByText(/My list/i)).toBeInTheDocument();
    expect(screen.getByText(/Catalog/i)).toBeInTheDocument();
  });

  it(`Render 'Film Page'`, () => {
    const history = createMemoryHistory();

    store.dispatch((dispatch) => {
      dispatch(loadFilms(filmsAdapter([FILM_MOCK])));
    });

    history.push(`${AppRoute.FILMS}/1`);

    render(
        <redux.Provider store={store}>
          <Router history={history}>
            <App/>
          </Router>
        </redux.Provider>,
    );

    expect(screen.getByText(/Overview/i)).toBeInTheDocument();
    expect(screen.getByText(/Details/i)).toBeInTheDocument();
    expect(screen.getByText(/Reviews/i)).toBeInTheDocument();
  });

  it(`Render 'Review Page'`, () => {
    const history = createMemoryHistory();

    store.dispatch((dispatch) => {
      dispatch(requireAuthorization(AuthorizationStatus.AUTH));
      dispatch(setUser(adaptUserData(AUTH_INFO_MOCK)));
      dispatch(loadFilms(filmsAdapter([FILM_MOCK])));
    });

    history.push(`/films/1/review`);

    render(
        <redux.Provider store={store}>
          <Router history={history}>
            <App/>
          </Router>
        </redux.Provider>,
    );

    expect(screen.getByAltText(/The Grand Budapest Hotel poster/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Rating 2/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Rating 10/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Review text/i)).toBeInTheDocument();
  });


  it(`Render 'PageNotFound' when user navigate to non-existent route`, () => {
    const history = createMemoryHistory();
    history.push(`/some-page`);

    render(
        <redux.Provider store={store}>
          <Router history={history}>
            <App/>
          </Router>
        </redux.Provider>,
    );

    expect(screen.getByText(`404 Not Found`)).toBeInTheDocument();
    expect(screen.getByText(`Вернуться на главную страницу`)).toBeInTheDocument();
  });
});

