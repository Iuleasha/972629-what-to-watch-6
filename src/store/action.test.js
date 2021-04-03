import {filmAdapter, filmsAdapter} from '../adapters/films';
import {userAdapter} from '../adapters/user';
import {AppRoute, AuthorizationStatus} from '../constants/constant';
import {AUTH_INFO_MOCK, COMMENT_MOCK, FILM_MOCK} from '../constants/mock';
import {
  ActionType,
  addReview,
  loadFavorite,
  loadFilms,
  redirectToRoute,
  requireAuthorization,
  setGenre,
  setUser,
  switchFavoriteStatus,
} from './action';

describe(`Action creators work correctly`, () => {
  it(`Action creator for select genre returns correct action`, function () {
    const expectedAction = {
      type: ActionType.SET_GENRE,
      payload: `Action`,
    };

    expect(setGenre(`Action`)).toEqual(expectedAction);
  });

  it(`Action creator for load films returns action with films`, function () {
    const films = filmsAdapter([FILM_MOCK]);

    const expectedAction = {
      type: ActionType.LOAD_SUCCESS,
      payload: films,
    };

    expect(loadFilms(films)).toEqual(expectedAction);
  });

  it(`Action creator for check auth returns correct action with unauth status`, function () {
    const expectedAction = {
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: AuthorizationStatus.NO_AUTH,
    };

    expect(requireAuthorization(AuthorizationStatus.NO_AUTH)).toEqual(expectedAction);
  });

  it(`Action creator for check auth returns correct action with auth status`, function () {
    const expectedAction = {
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: AuthorizationStatus.AUTH,
    };

    expect(requireAuthorization(AuthorizationStatus.AUTH)).toEqual(expectedAction);
  });

  it(`Action creator for redirect after auth returns correct action with rout`, function () {
    const expectedAction = {
      type: ActionType.REDIRECT_TO_ROUTE,
      payload: AppRoute.ROOT,
    };

    expect(redirectToRoute(AppRoute.ROOT)).toEqual(expectedAction);
  });

  it(`Action creator for get user returns correct action`, function () {
    const user = userAdapter(AUTH_INFO_MOCK);
    const expectedAction = {
      type: ActionType.SET_USER,
      payload: user,
    };

    expect(setUser(user)).toEqual(expectedAction);
  });

  it(`Action creator for add reviews returns correct action`, function () {
    const reviews = [{
      id: 1, comments: [COMMENT_MOCK],
    }];

    const expectedAction = {
      type: ActionType.ADD_REVIEW,
      payload: reviews,
    };

    expect(addReview(reviews)).toEqual(expectedAction);
  });

  it(`Action creator for load favorites films returns correct action`, function () {
    const films = filmsAdapter([FILM_MOCK]);
    const expectedAction = {
      type: ActionType.LOAD_FAVORITE,
      payload: films,
    };

    expect(loadFavorite(films)).toEqual(expectedAction);
  });

  it(`Action creator for change favorites status returns correct action`, function () {
    const film = filmAdapter(FILM_MOCK);
    const expectedAction = {
      type: ActionType.SWITCH_FAVORITE_STATUS,
      payload: film,
    };

    expect(switchFavoriteStatus(film)).toEqual(expectedAction);
  });
});
