import {filmAdapter, filmsAdapter} from '../adapters/films';
import {userAdapter} from '../adapters/user';
import {APIRoute, AppRoute, AuthorizationStatus} from '../constant';
import {ActionCreator} from "./action";

export const fetchFilmsList = () => (dispatch, _getState, api) => (
  api.get(APIRoute.FILMS)
    .then(({data}) => {
      dispatch(ActionCreator.loadFilms(filmsAdapter(data)));
    })
);

export const fetchFilm = (id) => (dispatch, _getState, api) => (
  api.get(`${APIRoute.FILM}/${id}`)
    .then(({data}) => dispatch(ActionCreator.loadPromoFilm(filmAdapter(data))))
);

export const fetchPromoFilm = () => (dispatch, _getState, api) => (
  api.get(APIRoute.PROMO_FILM)
    .then(({data}) => dispatch(ActionCreator.loadPromoFilm(filmAdapter(data))))
);

export const fetchFavorite = () => (dispatch, _getState, api) => (
  api.get(APIRoute.FAVORITE)
    .then(({data}) => {
      return dispatch(ActionCreator.loadFavorite(filmsAdapter(data)));
    })
);

export const switchFavoriteStatus = ({id, status}) => (dispatch, _getState, api) => (
  api.post(`${APIRoute.FAVORITE}/${id}/${status}`)
    .then(({data}) => dispatch(ActionCreator.switchFavoriteStatus(filmAdapter(data))))
);

export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(APIRoute.LOGIN)
    .then(({data}) => dispatch(ActionCreator.setUser(userAdapter(data))))
    .then(() => dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH)))
    .catch(() => {})
);

export const logOut = () => (dispatch, _getState, api) => (
  api.get(APIRoute.LOGOUT)
    .then(() => dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.NO_AUTH)))
    .catch(() => {})
);

export const login = (loginData) => (dispatch, _getState, api) => (
  api.post(APIRoute.LOGIN, loginData)
    .then(({data}) => dispatch(ActionCreator.setUser(userAdapter(data))))
    .then(() => dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH)))
    .then(() => dispatch(ActionCreator.redirectToRoute(AppRoute.ROOT)))
);

export const postComment = ({id, post}) => (dispatch, _getState, api) => (
  api.post(`${APIRoute.COMMENTS}/${id}`, post)
    .then(({data}) => dispatch(ActionCreator.addReview({id, comments: data})))
    .then(() => dispatch(ActionCreator.redirectToRoute(`${APIRoute.FILMS}/${id}`)))
);

export const fetchComments = (id) => (dispatch, _getState, api) => (
  api.get(`${APIRoute.COMMENTS}/${id}`)
    .then(({data}) => {
      return dispatch(ActionCreator.addReview({id, comments: data}));
    })
);
