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

export const ActionCreator = {
  setGenre: (payload) => ({
    type: ActionType.SET_GENRE,
    payload,
  }),
  loadFilms: (payload) => ({
    type: ActionType.LOAD_SUCCESS,
    payload,
  }),
  loadPromoFilm: (payload) => ({
    type: ActionType.LOAD_PROMO_FILM,
    payload,
  }),
  requireAuthorization: (payload) => ({
    type: ActionType.REQUIRED_AUTHORIZATION,
    payload,
  }),
  redirectToRoute: (payload) => ({
    type: ActionType.REDIRECT_TO_ROUTE,
    payload,
  }),
  setUser: (payload) => ({
    type: ActionType.SET_USER,
    payload,
  }),
  addReview: (payload) => ({
    type: ActionType.ADD_REVIEW,
    payload,
  }),
  loadFavorite: (payload) => ({
    type: ActionType.LOAD_FAVORITE,
    payload,
  }),
  switchFavoriteStatus: (payload) => ({
    type: ActionType.SWITCH_FAVORITE_STATUS,
    payload,
  }),
};


