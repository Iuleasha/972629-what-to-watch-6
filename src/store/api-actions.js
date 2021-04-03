import {filmAdapter, filmsAdapter} from '../adapters/films';
import {userAdapter} from '../adapters/user';
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
);

export const fetchFilm = (id) => (dispatch, _getState, api) => (
  api.get(`${APIRoute.FILM}/${id}`)
    .then(({data}) => dispatch(loadPromoFilm(filmAdapter(data))))
);

export const fetchPromoFilm = () => (dispatch, _getState, api) => (
  api.get(APIRoute.PROMO_FILM)
    .then(({data}) => dispatch(loadPromoFilm(filmAdapter(data))))
);

export const fetchFavorite = () => (dispatch, _getState, api) => (
  api.get(APIRoute.FAVORITE)
    .then(({data}) => {
      return dispatch(loadFavorite(filmsAdapter(data)));
    })
);

export const postFavoriteStatus = ({id, status}) => (dispatch, _getState, api) => (
  api.post(`${APIRoute.FAVORITE}/${id}/${status}`)
    .then(({data}) => dispatch(switchFavoriteStatus(filmAdapter(data))))
);

export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(APIRoute.LOGIN)
    .then(({data}) => dispatch(setUser(userAdapter(data))))
    .then(() => dispatch(requireAuthorization(AuthorizationStatus.AUTH)))
    .catch(() => {})
);

export const logOut = () => (dispatch, _getState, api) => (
  api.get(APIRoute.LOGOUT)
    .then(() => dispatch(requireAuthorization(AuthorizationStatus.NO_AUTH)))
    .catch(() => {})
);

export const login = (loginData) => (dispatch, _getState, api) => (
  api.post(APIRoute.LOGIN, loginData)
    .then(({data}) => dispatch(setUser(userAdapter(data))))
    .then(() => dispatch(requireAuthorization(AuthorizationStatus.AUTH)))
    .then(() => dispatch(redirectToRoute(AppRoute.ROOT)))
);

export const postComment = ({id, post}) => (dispatch, _getState, api) => (
  api.post(`${APIRoute.COMMENTS}/${id}`, post)
    .then(({data}) => dispatch(addReview({id, comments: data})))
    .then(() => dispatch(redirectToRoute(`${APIRoute.FILMS}/${id}`)))
);

export const fetchComments = (id) => (dispatch, _getState, api) => (
  api.get(`${APIRoute.COMMENTS}/${id}`)
    .then(({data}) => {
      return dispatch(addReview({id, comments: data}));
    })
);
