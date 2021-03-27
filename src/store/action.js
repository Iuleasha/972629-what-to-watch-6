import {createGenreType} from '../filter/filter';
import films from '../mocks/films';

export const FilterActionType = {
  LOAD_SUCCESS: `load/loadSuccess`,
  SET_FILTER: `filter/genres`,
};

export const ActionCreator = {
  filterGenres: (genre) => ({
    type: FilterActionType.SET_FILTER,
    payload: {genre, films: createGenreType(films, genre)},
  }),
  saveFilms: (payload) => ({
    type: FilterActionType.LOAD_SUCCESS,
    payload,
  }),
};


