import {createAction} from '@reduxjs/toolkit';
import {ActionType} from '../constants/constant';

const getPayload = (payload) => ({payload});

export const setGenre = createAction(ActionType.SET_GENRE, getPayload);

export const loadFilms = createAction(ActionType.LOAD_SUCCESS, getPayload);

export const loadPromoFilm = createAction(ActionType.LOAD_PROMO_FILM, getPayload);

export const requireAuthorization = createAction(ActionType.REQUIRED_AUTHORIZATION, getPayload);

export const redirectToRoute = createAction(ActionType.REDIRECT_TO_ROUTE, getPayload);

export const setUser = createAction(ActionType.SET_USER, getPayload);

export const addReview = createAction(ActionType.ADD_REVIEW, getPayload);

export const loadFavorite = createAction(ActionType.LOAD_FAVORITE, getPayload);

export const switchFavoriteStatus = createAction(ActionType.SWITCH_FAVORITE_STATUS, getPayload);
