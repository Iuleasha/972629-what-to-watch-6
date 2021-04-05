export const HeaderMode = {
  MOVIE_CARD: `movie-card__head`,
  USER_PAGE: `user-page__head`,
};

export const PosterSize = {
  WIDTH: 218,
  HEIGHT: 327,
};

export const MovieCardButtonSize = {
  WIDTH: 19,
  HEIGHT: 20,
};

export const MOVIE_CARD_NAV_ITEMS = [`Overview`, `Details`, `Reviews`];

export const DEFAULT_GENRE = `All genres`;

export const AppRoute = {
  LOGIN: `/login`,
  LOSE: `/lose`,
  MY_LIST: `/mylist`,
  ROOT: `/`,
  FILMS: `/films`,
  FILM: `/films/:id`,
  PLAYER: `/player/:id`,
  REVIEW: `/films/:id/review`,
};

export const AuthorizationStatus = {
  AUTH: `AUTH`,
  NO_AUTH: `NO_AUTH`,
};

export const APIRoute = {
  FILMS: `/films`,
  FILM: `/film`,
  PROMO_FILM: `/films/promo`,
  LOGIN: `/login`,
  LOGOUT: `/logout`,
  COMMENTS: `/comments`,
  FAVORITE: `/favorite`
};

export const ButtonIcon = {
  PLAY: `#play-s`,
  PAUSE: `#pause`,
  FULL_SCREEN: `#full-screen`,
  INLIST: `#in-list`,
  ADD: `#add`,
};

export const NameSpace = {
  DATA: `DATA`,
  COMMENTS: `COMMENTS`,
  USER: `USER`,
};

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

export const FILMS_PAGE_SIZE = 8;

export const AVATAR_SIZE = 63;

export const CommentLength = {
  MIN: 50,
  MAX: 400
};

export const STARS_LENGTH = 10;

export const RATING_DEFAULT_VALUE = 3;

export const RATING_STARS = [...Array(STARS_LENGTH).keys()].map((i) => i + 1);

export const Rating = {
  BAD: `Bad`,
  NORMAL: `Normal`,
  GOOD: `Good`,
  VERY_GOOD: `Very good`,
  AWESOME: `Awesome`,
};
