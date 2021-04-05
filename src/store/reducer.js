import {AuthorizationStatus, DEFAULT_GENRE} from '../constant';
import {createGenreArray} from '../filter/filter';
import {ActionType} from './action';

const initialState = {
  genre: DEFAULT_GENRE,
  genres: [],
  films: [],
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  isDataLoaded: false,
  comments: {},
  preview: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_GENRE:
      return {
        ...state,
        genre: action.payload,
      };

    case ActionType.LOAD_SUCCESS:
      return {
        ...state,
        genres: createGenreArray(action.payload),
        films: action.payload,
        isDataLoaded: true,
      };

    case ActionType.LOAD_PROMO_FILM:
      return {
        ...state,
        preview: action.payload,
      };

    case ActionType.REQUIRED_AUTHORIZATION:
      return {
        ...state,
        authorizationStatus: action.payload,
      };

    case ActionType.SET_USER:
      return {
        ...state,
        user: action.payload,
      };

    case ActionType.ADD_REVIEW:
      const {comments} = state;

      return {
        ...state,
        comments: {...comments, [action.payload.id]: action.payload.comments},
      };

    case ActionType.LOAD_FAVORITE:
      return {
        ...state,
        favorite: action.payload,
      };

    case ActionType.SWITCH_FAVORITE_STATUS:
      if (state.preview && state.preview.id === action.payload.id) {
        state.preview = action.payload;
      }

      state.films = state.films.map((item) => item.id === action.payload.id ?
        action.payload : item
      );

      return {
        ...state,
        favorite: state.films.filter(({isFavorite}) => isFavorite),
      };
  }

  return state;
};


export {reducer};
