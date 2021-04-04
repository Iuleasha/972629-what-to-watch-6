import {DEFAULT_GENRE} from '../constants/constant';

const MAX_GENRES_ARRAY_LENGTH = 10;

export const createGenreArray = (films) => {
  const genresArray = [...new Set(films.map((film) => film.genre))].sort();

  return [DEFAULT_GENRE, ...genresArray].slice(0, MAX_GENRES_ARRAY_LENGTH);
};

export const sortByGenre = (films, genre) => {
  return genre === DEFAULT_GENRE ? films : films.filter((item) => item.genre === genre);
};


