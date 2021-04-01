import PropTypes from 'prop-types';
import React, {useCallback, useMemo, useState} from 'react';
import {connect} from 'react-redux';
import {sortByGenre} from '../../filter/filter';
import {ActionCreator} from '../../store/action';
import {ActiveGenre, FilmsType, GenresType, OnSelectGenre} from '../../types/types';
import CatalogGenres from '../catalog-genres/catalog-genres';
import Footer from '../footer/footer';
import Loader from '../loader/loading-screen';
import MovieList from '../movie-list/movie-list';
import MovieCard from '../preview-card/preview-card';

const MAX_FILM_LENGTH = 8;

const MainPage = (props) => {
  const {films, onSelectGenre, genre, genres, isDataLoaded} = props;
  const [maxLength, setLength] = useState(MAX_FILM_LENGTH);
  const sortedFilms = useMemo(() =>sortByGenre(films, genre), [films]);
  const showMoreButtonClick = useCallback(() => {
    setLength((showedFilmsLength) => showedFilmsLength + MAX_FILM_LENGTH);
  }, [setLength]);

  const showedFilms = useMemo(() =>
    sortedFilms.slice(0, maxLength), [sortedFilms, genre, maxLength]);

  if (!isDataLoaded) {
    return (
      <Loader/>
    );
  }

  return (<>
    <MovieCard/>

    <div className="page-content">
      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <CatalogGenres genres={genres} onSelectGenre={onSelectGenre} activeFilter={genre}/>

        <MovieList films={showedFilms}/>

        {(films.length > MAX_FILM_LENGTH && maxLength < films.length) && <div className="catalog__more">
          <button className="catalog__button" type="button" onClick={showMoreButtonClick}>Show more</button>
        </div>}
      </section>

      <Footer/>
    </div>
  </>);
};

MainPage.propTypes = {
  films: FilmsType,
  onSelectGenre: OnSelectGenre,
  genre: ActiveGenre,
  genres: GenresType,
  isDataLoaded: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  genre: state.genre,
  genres: state.genres,
  films: state.films,
  isDataLoaded: state.isDataLoaded,
});

const mapDispatchToProps = (dispatch) => ({
  onSelectGenre(genre) {
    dispatch(ActionCreator.setGenre(genre));
  }
});

export {MainPage};
export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
