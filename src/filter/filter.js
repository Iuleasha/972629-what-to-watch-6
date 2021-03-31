import {DEFAULT_GENRE} from '../utils/constant/constant';

export const createGenreArray = (films) => {
  let genresArray = [];

  films.forEach((film) => {
    if (!genresArray.includes(film.genre)) {
      genresArray.push(film.genre);
    }
  });

  return [DEFAULT_GENRE, ...genresArray.sort()];
};

export const createGenreType = (films, genre) => {
  return genre === DEFAULT_GENRE ? films : films.filter((item) => item.genre === genre);
};


