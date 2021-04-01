import * as PropTypes from 'prop-types';
import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {HeaderMode, PosterSize} from '../../constant';
import {fetchPromoFilm} from '../../store/api-actions';
import {FilmType} from '../../types/types';
import Header from '../header/header';
import MyListButton from '../my-list-button/my-list-button';
import PlayButton from '../play-button/play-button';

const PreviewCard = ({preview, onLoadData}) => {
  useEffect(() => {
    if (preview === null) {
      onLoadData();
    }
  }, [preview !== null]);

  if (preview === null) {
    return <section className="movie-card">
      <div className="movie-card__bg"/>
    </section>;
  }

  return <section className="movie-card">
    <div className="movie-card__bg">
      <img src={preview.backgroundImage} alt={preview.name}/>
    </div>

    <h1 className="visually-hidden">WTW</h1>

    <Header type={HeaderMode.MOVIE_CARD}/>

    <div className="movie-card__wrap">
      <div className="movie-card__info">
        <div className="movie-card__poster">
          <img src={preview.posterImage} alt={`${preview.name} poster`}
            width={PosterSize.WIDTH}
            height={PosterSize.HEIGHT}/>
        </div>
        <div className="movie-card__desc">
          <h2 className="movie-card__title">{preview.name}</h2>
          <p className="movie-card__meta">
            <span className="movie-card__genre">{preview.genre}</span>
            <span className="movie-card__year">{preview.released}</span>
          </p>
          <div className="movie-card__buttons">
            <PlayButton id={preview.id}/>

            <MyListButton id={preview.id} isFavorite={preview.isFavorite}/>
          </div>
        </div>
      </div>
    </div>
  </section>;
};

PreviewCard.propTypes = {preview: FilmType, onLoadData: PropTypes.func.isRequired};

const mapStateToProps = (state) => ({
  preview: state.preview,
});

const mapDispatchToProps = (dispatch) => ({
  onLoadData() {
    dispatch(fetchPromoFilm());
  },
});

export {PreviewCard};
export default connect(mapStateToProps, mapDispatchToProps)(PreviewCard);
