import {FilterActionType} from '../../store/action';

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
export const GENRES_ARRAY = [
  {title: `All genres`, type: FilterActionType.ALL_GENRES},
  {title: `Comedies`, type: FilterActionType.COMEDIES},
  {title: `Crime`, type: FilterActionType.CRIME},
  {title: `Documentary`, type: FilterActionType.DOCUMENTARY},
  {title: `Dramas`, type: FilterActionType.DRAMAS},
  {title: `Horror`, type: FilterActionType.HORROR},
  {title: `Kids & Family`, type: FilterActionType.KIDS_AND_FAMILY},
  {title: `Romance`, type: FilterActionType.ROMANCE},
  {title: `Sci-Fi`, type: FilterActionType.SCI_FI},
  {title: `Thrillers`, type: FilterActionType.THRILLERS},
];
