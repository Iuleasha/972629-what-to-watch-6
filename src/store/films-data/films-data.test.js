import {filmAdapter} from '../../adapters/films';
import {DEFAULT_GENRE} from '../../constants/constant';
import {FILM_MOCK} from '../../constants/mock';
import {loadFavorite, loadFilms, loadPromoFilm, setGenre, switchFavoriteStatus} from '../action';
import {filmsData} from './films-data';

const MOCK_FILM = filmAdapter(FILM_MOCK);

describe(`Reducers work correctly`, () => {
  it(`Reducer should set active genre by a given value`, () => {
    const state = {genre: DEFAULT_GENRE};

    expect(filmsData(state, setGenre(`Action`))).toEqual({genre: `Action`});
  });

  it(`Reducer should load films, create genres list and change load data status`, () => {
    const state = {genres: [], films: [], isDataLoaded: false};

    expect(filmsData(state, loadFilms([MOCK_FILM]))).toEqual({
      genres: [DEFAULT_GENRE, `Comedy`],
      films: [MOCK_FILM],
      isDataLoaded: true,
    });
  });

  it(`Reducer should load preview film`, () => {
    const state = {preview: null};

    expect(filmsData(state, loadPromoFilm(MOCK_FILM))).toEqual({preview: MOCK_FILM});
  });

  it(`Reducer should load and save favorite films`, () => {
    const state = {};

    expect(filmsData(state, loadFavorite([MOCK_FILM]))).toEqual({favorite: [MOCK_FILM]});
  });

  it(`Reducer should switch favorite status and add films to favorite list`, () => {
    const state = {films: [MOCK_FILM]};

    expect(filmsData(state, switchFavoriteStatus({...MOCK_FILM, isFavorite: true}))).toEqual({
      favorite: [{
        ...MOCK_FILM,
        isFavorite: true,
      }], films: [{...MOCK_FILM, isFavorite: true}],
    });
  });
});
