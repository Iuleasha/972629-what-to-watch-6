import {DEFAULT_GENRE} from '../constant';

export const createGenreArray = (films) => {
  const genresArray = [...new Set(films.map((film) => film.genre))].sort();

  return [DEFAULT_GENRE, ...genresArray];
};

export const sortByGenre = (films, genre) => {
  return genre === DEFAULT_GENRE ? films : films.filter((item) => item.genre === genre);
};


