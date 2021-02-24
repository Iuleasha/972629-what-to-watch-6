import React from 'react';
import Footer from '../footer/footer';
import Header from '../header/header';
import {HeaderMode, PosterSize, MovieCardButtonSize} from '../../utils/constant/constant';
import MovieList from '../movie-list/movie-list';
import {filmsType, movieCardType} from '../../types/types';


const MainPage = ({movieCardInfo, films}) => {
  return (<>
    <section className="movie-card">
      <div className="movie-card__bg">
        <img src={films[0].backgroundImage} alt={films[0].name}/>
      </div>
      <h1 className="visually-hidden">WTW</h1>
      <Header type={HeaderMode.MOVIE_CARD}/>
      <div className="movie-card__wrap">
        <div className="movie-card__info">
          <div className="movie-card__poster">
            <img src={films[0].posterImage} alt={`${films[0].name} poster`}
              width={PosterSize.WIDTH}
              height={PosterSize.HEIGHT}/>
          </div>
          <div className="movie-card__desc">
            <h2 className="movie-card__title">{movieCardInfo.TITLE}</h2>
            <p className="movie-card__meta">
              <span className="movie-card__genre">{movieCardInfo.GENRE}</span>
              <span className="movie-card__year">{movieCardInfo.RELEASE_DATE}</span>
            </p>
            <div className="movie-card__buttons">
              <button className="btn btn--play movie-card__button" type="button">
                <svg viewBox={`0 0 ${MovieCardButtonSize.WIDTH} ${MovieCardButtonSize.WIDTH}`}
                  width={MovieCardButtonSize.WIDTH} height={MovieCardButtonSize.WIDTH}>
                  <use xlinkHref="#play-s"/>
                </svg>
                <span>Play</span>
              </button>
              <button className="btn btn--list movie-card__button" type="button">
                <svg viewBox={`0 0 ${MovieCardButtonSize.WIDTH} ${MovieCardButtonSize.HEIGHT}`}
                  width={MovieCardButtonSize.WIDTH} height={MovieCardButtonSize.HEIGHT}>
                  <use xlinkHref="#add"/>
                </svg>
                <span>My list</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div className="page-content">
      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>
        <ul className="catalog__genres-list">
          <li className="catalog__genres-item catalog__genres-item--active">
            <a href="#" className="catalog__genres-link">All genres</a>
          </li>
          <li className="catalog__genres-item">
            <a href="#" className="catalog__genres-link">Comedies</a>
          </li>
          <li className="catalog__genres-item">
            <a href="#" className="catalog__genres-link">Crime</a>
          </li>
          <li className="catalog__genres-item">
            <a href="#" className="catalog__genres-link">Documentary</a>
          </li>
          <li className="catalog__genres-item">
            <a href="#" className="catalog__genres-link">Dramas</a>
          </li>
          <li className="catalog__genres-item">
            <a href="#" className="catalog__genres-link">Horror</a>
          </li>
          <li className="catalog__genres-item">
            <a href="#" className="catalog__genres-link">Kids &amp; Family</a>
          </li>
          <li className="catalog__genres-item">
            <a href="#" className="catalog__genres-link">Romance</a>
          </li>
          <li className="catalog__genres-item">
            <a href="#" className="catalog__genres-link">Sci-Fi</a>
          </li>
          <li className="catalog__genres-item">
            <a href="#" className="catalog__genres-link">Thrillers</a>
          </li>
        </ul>

        <MovieList films={films}/>

        <div className="catalog__more">
          <button className="catalog__button" type="button">Show more</button>
        </div>
      </section>
      <Footer/>
    </div>
  </>);
};

MainPage.propTypes = {movieCardInfo: movieCardType, films: filmsType};


export default MainPage;
