import {render, screen} from '@testing-library/react';
import {createMemoryHistory} from 'history';
import React from 'react';
import * as redux from 'react-redux';
import {Router} from 'react-router-dom';
import configureStore from 'redux-mock-store';
import {filmAdapter, filmsAdapter} from '../../adapters/films';
import {AuthorizationStatus, DEFAULT_GENRE} from '../../constants/constant';
import App from './app';

const mockStore = configureStore({});
describe(`Test routing`, () => {
  jest.spyOn(redux, `useSelector`);
  jest.spyOn(redux, `useDispatch`);

  it(`Render 'WelcomeScreen' when user navigate to '/' url`, () => {
    const store = mockStore({
      authorizationStatus: AuthorizationStatus.AUTH,
      films: filmsAdapter([{
        'id': 1,
        'name': `The Grand Budapest Hotel`,
        'poster_image': `img/the-grand-budapest-hotel-poster.jpg`,
        'preview_image': `img/the-grand-budapest-hotel.jpg`,
        'background_image': `img/the-grand-budapest-hotel-bg.jpg`,
        'background_color': `#ffffff`,
        'video_link': `https://some-link`,
        'preview_video_link': `https://some-link`,
        'description': `In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave's friend and protege.`,
        'rating': 8.9,
        'scores_count': 240,
        'director': `Wes Andreson`,
        'starring': [`Bill Murray`, `Edward Norton`, `Jude Law`, `Willem Dafoe`, `Saoirse Ronan`],
        'run_time': 99,
        'genre': `Comedy`,
        'released': 2014,
        'is_favorite': false,
      }]),
      genre: DEFAULT_GENRE,
      genres: [DEFAULT_GENRE, `Comedy`],
      isDataLoaded: true,
      preview: filmAdapter({
        'id': 1,
        'name': `The Grand Budapest Hotel`,
        'poster_image': `img/the-grand-budapest-hotel-poster.jpg`,
        'preview_image': `img/the-grand-budapest-hotel.jpg`,
        'background_image': `img/the-grand-budapest-hotel-bg.jpg`,
        'background_color': `#ffffff`,
        'video_link': `https://some-link`,
        'preview_video_link': `https://some-link`,
        'description': `In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave's friend and protege.`,
        'rating': 8.9,
        'scores_count': 240,
        'director': `Wes Andreson`,
        'starring': [`Bill Murray`, `Edward Norton`, `Jude Law`, `Willem Dafoe`, `Saoirse Ronan`],
        'run_time': 99,
        'genre': `Comedy`,
        'released': 2014,
        'is_favorite': false,
      }),
    });

    const history = createMemoryHistory();
    render(
        <redux.Provider store={store}>
          <Router history={history}>
            <App/>
          </Router>
        </redux.Provider>,
    );

    expect(screen.getByText(/© 2021 What to watch Ltd./i)).toBeInTheDocument();
  });

  it(`Render 'AuthScreen' when user navigate to '/login' url`, () => {
    const history = createMemoryHistory();
    history.push(`/login`);

    render(
        <redux.Provider store={mockStore({})}>
          <Router history={history}>
            <App/>
          </Router>
        </redux.Provider>,
    );

    expect(screen.getByText(/Sign in/i)).toBeInTheDocument();
  });

  it(`Render 'WinScreen' when user navigate to '/result' url`, () => {
    const store = mockStore({
      USER: {authorizationStatus: AuthorizationStatus.AUTH},
      GAME: {step: 10, mistakes: 2},
    });

    const history = createMemoryHistory();
    history.push(`/result`);

    render(
        <redux.Provider store={store}>
          <Router history={history}>
            <App/>
          </Router>
        </redux.Provider>,
    );

    expect(screen.getByText(/Вы настоящий меломан!/i)).toBeInTheDocument();
    expect(screen.getByText(/Вы ответили правильно на 8 вопросов/i)).toBeInTheDocument();
    expect(screen.getByText(/Сыграть ещё раз/i)).toBeInTheDocument();
  });

  it(`Render 'GameOverScreen' when user navigate to '/lose' url`, () => {
    const history = createMemoryHistory();
    history.push(AppRoute.LOSE);

    render(
        <redux.Provider store={mockStore({})}>
          <Router history={history}>
            <App/>
          </Router>
        </redux.Provider>,
    );

    expect(screen.getByText(/Какая жалость!/i)).toBeInTheDocument();
    expect(screen.getByText(/Попробовать ещё раз/i)).toBeInTheDocument();
    expect(screen.getByText(/У вас закончились все попытки. Ничего, повезёт в следующий раз!/i)).toBeInTheDocument();
  });

  it(`Render 'NotFoundScreen' when user navigate to non-existent route`, () => {
    const history = createMemoryHistory();
    history.push(`/non-existent-route`);

    render(
        <redux.Provider store={mockStore({})}>
          <Router history={history}>
            <App/>
          </Router>
        </redux.Provider>,
    );

    expect(screen.getByText(`404. Page not found`)).toBeInTheDocument();
    expect(screen.getByText(`Вернуться на главную`)).toBeInTheDocument();
  });
});

