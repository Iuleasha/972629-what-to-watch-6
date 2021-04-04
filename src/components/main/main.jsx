import React, {useMemo, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {FILMS_PAGE_SIZE} from '../../constants/constant';
import {sortByGenre} from '../../filter/filter';
import {setGenre} from '../../store/action';
import {selectFilmsData} from '../../store/films-data/selectors';
import CatalogGenres from '../catalog-genres/catalog-genres';
import Footer from '../footer/footer';
import Loader from '../loader/loading-screen';
import MovieList from '../movie-list/movie-list';
import MovieCard from '../preview-card/preview-card';

const MainPage = () => {
  const {genre, genres, films, isDataLoaded} = useSelector(selectFilmsData);

  const dispatch = useDispatch();

  const handleSelectGenre = (selectedGenre) => {
    dispatch(setGenre(selectedGenre));
  };

  const [maxLength, setLength] = useState(FILMS_PAGE_SIZE);

  const sortedFilms = useMemo(() => sortByGenre(films, genre), [films, genre]);

  const handleShowMoreButtonClick = () => {
    setLength((showedFilmsLength) => showedFilmsLength + FILMS_PAGE_SIZE);
  };

  const showedFilms = useMemo(() =>
    sortedFilms.slice(0, maxLength), [sortedFilms, genre, maxLength]);

  if (!isDataLoaded) {
    return (
      <Loader/>
    );
  }

  const showMoreButton = sortedFilms.length > FILMS_PAGE_SIZE && maxLength < sortedFilms.length;

  return (<>
    <MovieCard/>

    <div className="page-content">
      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <CatalogGenres genres={genres} onSelectGenre={handleSelectGenre} activeFilter={genre}/>

        <MovieList films={showedFilms}/>

        {showMoreButton && <div className="catalog__more">
          <button className="catalog__button" type="button" onClick={handleShowMoreButtonClick}>Show more</button>
        </div>}
      </section>

      <Footer/>
    </div>
  </>);
};

export default MainPage;
