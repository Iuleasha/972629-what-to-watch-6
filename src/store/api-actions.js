import {adaptFilmData, filmsAdapter} from '../adapters/films';
import {adaptUserData} from '../adapters/user';
import {APIRoute, AppRoute, AuthorizationStatus} from '../constants/constant';
import {
  addReview,
  loadFavorite,
  loadFilms,
  loadPromoFilm,
  redirectToRoute,
  requireAuthorization,
  setUser,
  switchFavoriteStatus,
} from './action';

export const fetchFilmsList = () => (dispatch, _getState, api) => (
  api.get(APIRoute.FILMS)
    .then(({data}) => {
      dispatch(loadFilms(filmsAdapter(data)));
    })
    .catch(() => {
      dispatch(loadFilms([]));
    })
);

export const fetchPromoFilm = () => (dispatch, _getState, api) => (
  api.get(APIRoute.PROMO_FILM)
    .then(({data}) => dispatch(loadPromoFilm(adaptFilmData(data))))
);

export const fetchFavorite = () => (dispatch, _getState, api) => (
  api.get(APIRoute.FAVORITE)
    .then(({data}) => {
      return dispatch(loadFavorite(filmsAdapter(data)));
    })
);

export const postFavoriteStatus = ({id, status}) => (dispatch, _getState, api) => (
  api.post(`${APIRoute.FAVORITE}/${id}/${status}`)
    .then(({data}) => dispatch(switchFavoriteStatus(adaptFilmData(data))))
);

export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(APIRoute.LOGIN)
    .then(({data}) => dispatch(setUser(adaptUserData(data))))
    .then(() => dispatch(requireAuthorization(AuthorizationStatus.AUTH)))
    .then(() => dispatch(fetchFilmsList()))
    .catch(() => {
      dispatch(fetchFilmsList());
    })
);

export const logOut = () => (dispatch, _getState, api) => (
  api.get(APIRoute.LOGOUT)
    .then(() => dispatch(requireAuthorization(AuthorizationStatus.NO_AUTH)))
    .catch(() => {})
);

export const login = (loginData, onError) => (dispatch, _getState, api) => (
  api.post(APIRoute.LOGIN, loginData)
    .then(({data}) => dispatch(setUser(adaptUserData(data))))
    .then(() => dispatch(requireAuthorization(AuthorizationStatus.AUTH)))
    .then(() => dispatch(redirectToRoute(AppRoute.ROOT)))
    .catch(onError)
);

export const postComment = ({id, post}, onError) => (dispatch, _getState, api) => (
  api.post(`${APIRoute.COMMENTS}/${id}`, post)
    .then(({data}) => dispatch(addReview({id, comments: data})))
    .then(() => dispatch(redirectToRoute(`${APIRoute.FILMS}/${id}`)))
    .catch(onError)
);

export const fetchComments = (id) => (dispatch, _getState, api) => (
  api.get(`${APIRoute.COMMENTS}/${id}`)
    .then(({data}) => {
      return dispatch(addReview({id, comments: data}));
    })
);
