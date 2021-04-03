import {createAction} from '@reduxjs/toolkit';

export const ActionType = {
  LOAD_SUCCESS: `load/loadSuccess`,
  LOAD_PROMO_FILM: `load/loadPromoFilm`,
  SET_GENRE: `filter/genres`,
  LOAD_FAVORITE: `load/favorite`,
  SWITCH_FAVORITE_STATUS: `load/switchFavoriteStatus`,
  REQUIRED_AUTHORIZATION: `user/requiredAuthorization`,
  REDIRECT_TO_ROUTE: `site/redirectToRoute`,
  SET_USER: `user/setUser`,
  ADD_REVIEW: `film/addReview`,
};

export const setGenre = createAction(ActionType.SET_GENRE, (genre) => {
  return {
    payload: genre,
  };
});

export const loadFilms = createAction(ActionType.LOAD_SUCCESS, (films) => {
  return {
    payload: films,
  };
});

export const loadPromoFilm = createAction(ActionType.LOAD_PROMO_FILM, (promoFilm) => {
  return {
    payload: promoFilm,
  };
});

export const requireAuthorization = createAction(ActionType.REQUIRED_AUTHORIZATION, (authStatus) => {
  return {
    payload: authStatus,
  };
});

export const redirectToRoute = createAction(ActionType.REDIRECT_TO_ROUTE, (route) => {
  return {
    payload: route,
  };
});

export const setUser = createAction(ActionType.SET_USER, (userInfo) => {
  return {
    payload: userInfo,
  };
});

export const addReview = createAction(ActionType.ADD_REVIEW, (comments) => {
  return {
    payload: comments,
  };
});

export const loadFavorite = createAction(ActionType.LOAD_FAVORITE, (favorites) => {
  return {
    payload: favorites,
  };
});

export const switchFavoriteStatus = createAction(ActionType.SWITCH_FAVORITE_STATUS, (favorites) => {
  return {
    payload: favorites,
  };
});
