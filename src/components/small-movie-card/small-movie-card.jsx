import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import {FilmType, OnHover} from '../../types/types';
import VideoPlayer from '../video-player/video-player';

const ImageSize = {
  WIDTH: 280,
  HEIGHT: 175,
};

const SmallMovieCard = (props) => {
  const {film, onHoverCallback} = props;
  const [isPreviewStart, showPreview] = useState(false);
  const [timer, setTimer] = useState(0);

  const handleMouseEnter = () => {
    onHoverCallback(film.id);
    setTimer(setTimeout(() => showPreview(true), 1000));
  };

  const handleMouseLeave = () => {
    showPreview(false);
    setTimer(0);
    clearTimeout(timer);
    onHoverCallback();
  };

  useEffect(() => {
    return () => {
      clearTimeout(timer);
    };
  });

  return (
    <article className="small-movie-card catalog__movies-card"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Link to={`/films/${film.id}`} className="small-movie-card__link">
        <div className="small-movie-card__image">
          {isPreviewStart ? <VideoPlayer src={film.previewVideoLink} hasControls={false} isAutoPlay={true} isMuted={true}/> :
            <img src={film.posterImage} alt={film.name} width={ImageSize.WIDTH} height={ImageSize.HEIGHT}/>}
        </div>
        <h3 className="small-movie-card__title">
          <span>{film.name}</span>
        </h3>
      </Link>
    </article>
  );
};

SmallMovieCard.propTypes = {
  film: FilmType,
  onHoverCallback: OnHover,
};
export default SmallMovieCard;
