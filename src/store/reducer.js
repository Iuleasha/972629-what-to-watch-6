import films from '../mocks/films';
import {genresItem} from '../utils/utils';
import {FilterActionType} from './action';

const initialState = {
  genre: FilterActionType.ALL_GENRES,
  films,
};

const reducer = (state = initialState, action) => {

  switch (action.type) {
    case FilterActionType.COMEDIES:
      return {
        genre: action.type,
        films: initialState.films.filter((item) => item.genre === genresItem[action.type]),
      };
    case FilterActionType.CRIME:
      return {
        genre: action.type,
        films: initialState.films.filter((item) => item.genre === genresItem[action.type]),
      };
    case FilterActionType.DOCUMENTARY:
      return {
        genre: action.type,
        films: initialState.films.filter((item) => item.genre === genresItem[action.type]),
      };
    case FilterActionType.DRAMAS:
      return {
        genre: action.type,
        films: initialState.films.filter((item) => item.genre === genresItem[action.type]),
      };
    case FilterActionType.HORROR:
      return {
        genre: action.type,
        films: initialState.films.filter((item) => item.genre === genresItem[action.type]),
      };
    case FilterActionType.KIDS_AND_FAMILY:
      return {
        genre: action.type,
        films: initialState.films.filter((item) => item.genre === genresItem[action.type]),
      };
    case FilterActionType.ROMANCE:
      return {
        genre: action.type,
        films: initialState.films.filter((item) => item.genre === genresItem[action.type]),
      };
    case FilterActionType.SCI_FI:
      return {
        genre: action.type,
        films: initialState.films.filter((item) => item.genre === genresItem[action.type]),
      };
    case FilterActionType.THRILLERS:
      return {
        genre: action.type,
        films: initialState.films.filter((item) => item.genre === genresItem[action.type]),
      };
    case FilterActionType.ALL_GENRES:
      return {
        ...initialState,
      };
  }

  return state;
};


export {reducer};
