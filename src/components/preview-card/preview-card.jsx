import React from 'react';
import {connect} from 'react-redux';
import {FilmType} from '../../types/types';
import {HeaderMode, PosterSize} from '../../utils/constant/constant';
import Header from '../header/header';
import MyListButton from '../my-list-button/my-list-button';
import PlayButton from '../play-button/play-button';

const PreviewCard = ({film}) => {
  return <section className="movie-card">
    <div className="movie-card__bg">
      <img src={film.backgroundImage} alt={film.name}/>
    </div>
    <h1 className="visually-hidden">WTW</h1>

    <Header type={HeaderMode.MOVIE_CARD}/>

    <div className="movie-card__wrap">
      <div className="movie-card__info">
        <div className="movie-card__poster">
          <img src={film.posterImage} alt={`${film.name} poster`}
            width={PosterSize.WIDTH}
            height={PosterSize.HEIGHT}/>
        </div>
        <div className="movie-card__desc">
          <h2 className="movie-card__title">{film.name}</h2>
          <p className="movie-card__meta">
            <span className="movie-card__genre">{film.genre}</span>
            <span className="movie-card__year">{film.released}</span>
          </p>
          <div className="movie-card__buttons">
            <PlayButton id={film.id}/>

            <MyListButton/>
          </div>
        </div>
      </div>
    </div>
  </section>;
};

PreviewCard.propTypes = {film: FilmType};

const mapStateToProps = (state) => ({
  film: state.preview,
});

export {PreviewCard};
export default connect(mapStateToProps)(PreviewCard);
