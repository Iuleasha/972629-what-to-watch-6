import React, {useMemo} from 'react';
import {Link, useParams} from 'react-router-dom';
import {FilmsType} from '../../types/types';
import {HeaderMode, MovieCardButtonSize} from '../../utils/constant/constant';
import Footer from '../footer/footer';
import Header from '../header/header';
import MovieList from '../movie-list/movie-list';
import PageNotFound from '../page-not-found/page-not-found';
import PlayButton from '../play-button/play-button';
import Tabs from '../tabs/tabs';

const Film = ({films}) => {
  const {id} = useParams();
  const film = useMemo(() => films.find((item) => String(item.id) === id), [id]);
  const likeThisFilms = film && films.filter((item) => item.genre === film.genre && item.id !== film.id).sort(() => Math.random() - 0.5).slice(0, 4);

  return (film ? <>
    <section className="movie-card movie-card--full">
      <div className="movie-card__hero">
        <div className="movie-card__bg">
          <img src={film.backgroundImage} alt={film.name}/>
        </div>
        <h1 className="visually-hidden">WTW</h1>
        <Header type={HeaderMode.MOVIE_CARD}/>
        <div className="movie-card__wrap">
          <div className="movie-card__desc">
            <h2 className="movie-card__title">{film.name}</h2>
            <p className="movie-card__meta">
              <span className="movie-card__genre">{film.genre}</span>
              <span className="movie-card__year">{film.released}</span>
            </p>
            <div className="movie-card__buttons">

              <PlayButton id={film.id}/>

              <button className="btn btn--list movie-card__button" type="button">
                <svg viewBox="0 0 19 20" width={MovieCardButtonSize.WIDTH} height={MovieCardButtonSize.HEIGHT}>
                  <use xlinkHref="#add"/>
                </svg>
                <span>My list</span>
              </button>
              <Link to={`/films/${film.id}/review`} className="btn movie-card__button">Add review</Link>
            </div>
          </div>
        </div>
      </div>
      <div className="movie-card__wrap movie-card__translate-top">
        <div className="movie-card__info">
          <div className="movie-card__poster movie-card__poster--big">
            <img src={film.posterImage} alt={`${film.name} poster`} width={218}
              height={327}/>
          </div>
          <Tabs film={film}/>
        </div>
      </div>
    </section>
    <div className="page-content">
      {likeThisFilms.length > 0 && <section className="catalog catalog--like-this">
        <h2 className="catalog__title">More like this</h2>
        <MovieList films={likeThisFilms}/>
      </section>}
      <Footer/>
    </div>
  </> : <PageNotFound/>);
};

Film.propTypes = {films: FilmsType};

export default Film;
