import {createReducer} from '@reduxjs/toolkit';
import {DEFAULT_GENRE} from '../../constants/constant';
import {createGenreArray} from '../../filter/filter';
import {loadFavorite, loadFilms, loadPromoFilm, setGenre, switchFavoriteStatus} from '../action';

const initialState = {
  genre: DEFAULT_GENRE,
  genres: [],
  films: [],
  isDataLoaded: false,
  preview: null,
};

const filmsData = createReducer(initialState, (builder) => {
  builder.addCase(loadFilms, (state, action) => {
    state.genres = createGenreArray(action.payload);
    state.films = action.payload;
    state.isDataLoaded = true;
  });
  builder.addCase(setGenre, (state, action) => {
    state.genre = action.payload;
  });
  builder.addCase(loadPromoFilm, (state, action) => {
    state.preview = action.payload;
  });
  builder.addCase(loadFavorite, (state, action) => {
    state.favorite = action.payload;
  });
  builder.addCase(switchFavoriteStatus, (state, action) => {
    if (state.preview && state.preview.id === action.payload.id) {
      state.preview = action.payload;
    }

    state.films = state.films.map((item) => item.id === action.payload.id ?
      action.payload : item,
    );

    state.favorite = state.films.filter(({isFavorite}) => isFavorite);
  });
});

export {filmsData};
