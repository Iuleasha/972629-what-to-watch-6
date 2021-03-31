import {createGenreArray} from '../filter/filter';
import {DEFAULT_GENRE} from '../utils/constant/constant';
import {FilterActionType} from './action';

const initialState = {
  genre: DEFAULT_GENRE,
  genres: [],
  films: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FilterActionType.SET_FILTER:
      return {
        ...state,
        genre: action.payload.genre,
        films: action.payload.films,
      };

    case FilterActionType.LOAD_SUCCESS:
      return {
        ...state,
        genres: createGenreArray(action.payload),
        films: action.payload,
        preview: action.payload[Math.floor(Math.random() * action.payload.length)],
      };
  }

  return state;
};


export {reducer};
