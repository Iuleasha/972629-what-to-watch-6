import React, {useMemo, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {sortByGenre} from '../../filter/filter';
import {setGenre} from '../../store/action';
import CatalogGenres from '../catalog-genres/catalog-genres';
import Footer from '../footer/footer';
import Loader from '../loader/loading-screen';
import MovieList from '../movie-list/movie-list';
import MovieCard from '../preview-card/preview-card';

const MAX_FILM_LENGTH = 8;

const MainPage = () => {
  const {genre, genres, films, isDataLoaded} = useSelector((state) => state.DATA);

  const dispatch = useDispatch();

  const onSelectGenre = (selectedGenre) => {
    dispatch(setGenre(selectedGenre));
  };

  const [maxLength, setLength] = useState(MAX_FILM_LENGTH);

  const sortedFilms = useMemo(() => sortByGenre(films, genre), [films, genre]);

  const handleShowMoreButtonClick = () => {
    setLength((showedFilmsLength) => showedFilmsLength + MAX_FILM_LENGTH);
  };

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

        {(sortedFilms.length > MAX_FILM_LENGTH && maxLength < sortedFilms.length) && <div className="catalog__more">
          <button className="catalog__button" type="button" onClick={handleShowMoreButtonClick}>Show more</button>
        </div>}
      </section>

      <Footer/>
    </div>
  </>);
};

export default MainPage;
