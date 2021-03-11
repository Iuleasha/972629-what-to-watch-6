import React, {useState} from 'react';
import {Link, useParams, useHistory} from 'react-router-dom';
import {FilmsType} from '../../types/types';
import Details from '../details/details';
import Footer from '../footer/footer';
import Header from '../header/header';
import MovieList from '../movie-list/movie-list';
import Overview from '../overview/overview';
import Reviews from '../reviews/reviews';
import {HeaderMode, MovieCardButtonSize} from '../../utils/constant/constant';

const Film = ({films}) => {
  const navItems = [`Overview`, `Details`, `Reviews`];
  const {id} = useParams();
  const {push} = useHistory();
  const film = films.find((item) => String(item.id) === id);

  const [navItem, switchNav] = useState(navItems[0]);

  return (<>
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

              <button className="btn btn--play movie-card__button" type="button" onClick={()=>push(`/player/${film.id}`)}>
                <svg viewBox="0 0 19 19" width={MovieCardButtonSize.WIDTH} height={MovieCardButtonSize.WIDTH}>
                  <use xlinkHref="#play-s"/>
                </svg>
                <span>Play</span>
              </button>

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
          <div className="movie-card__desc">
            <nav className="movie-nav movie-card__nav">
              <ul className="movie-nav__list">
                {navItems.map((item, index) => (<li key={item + index}
                  className={`movie-nav__item ${navItem === item ? `movie-nav__item--active` : ``}`}>
                  <a href="#" className="movie-nav__link" onClick={(event) => {
                    event.preventDefault();
                    switchNav(item);
                  }}>{item}</a>
                </li>))}
              </ul>
            </nav>
            {navItem === `Overview` && <Overview film={film}/>}
            {navItem === `Details` && <Details film={film}/>}
            {navItem === `Reviews` && <Reviews filmId={film.id}/>}
          </div>
        </div>
      </div>
    </section>
    <div className="page-content">
      <section className="catalog catalog--like-this">
        <h2 className="catalog__title">More like this</h2>
        <MovieList films={films}/>
      </section>
      <Footer/>
    </div>

  </>);
};

Film.propTypes = {films: FilmsType};

export default Film;
