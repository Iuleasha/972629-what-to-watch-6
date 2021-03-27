import React, {useMemo} from 'react';
import {connect} from 'react-redux';
import {Link, useParams} from 'react-router-dom';
import {FilmsType} from '../../types/types';
import {HeaderMode} from '../../utils/constant/constant';
import Footer from '../footer/footer';
import Header from '../header/header';
import MoreLikeThis from '../more-like-this/more-like-this';
import MyListButton from '../my-list-button/my-list-button';
import PageNotFound from '../page-not-found/page-not-found';
import PlayButton from '../play-button/play-button';
import Tabs from '../tabs/tabs';

const Film = ({films}) => {
  const {id} = useParams();
  const film = useMemo(() => films.find((item) => String(item.id) === id), [id]);
  const likeThisFilms = useMemo(() => films.filter((item) => item.genre === film.genre && item.id !== film.id).sort(() => Math.random() - 0.5).slice(0, 4), [id]);

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

              <MyListButton/>

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
      {likeThisFilms.length > 0 && <MoreLikeThis films={likeThisFilms}/>}
      <Footer/>
    </div>
  </> : <PageNotFound/>);
};

Film.propTypes = {films: FilmsType};

const mapStateToProps = (state) => ({
  films: state.films,
});

export {Film};
export default connect(mapStateToProps)(Film);
