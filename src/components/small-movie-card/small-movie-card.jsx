import React, {useCallback, useEffect, useState} from 'react';
import {useHistory} from 'react-router-dom';
import {AppRoute} from '../../constants/constant';
import {FilmType} from '../../types/types';
import VideoPlayer from '../video-player/video-player';

const ImageSize = {
  WIDTH: 280,
  HEIGHT: 175,
};

const PLAYBACK_DELAY = 1000;

const SmallMovieCard = ({film}) => {
  let timeoutId;
  const [isPreviewStart, setIsPreviewStart] = useState(false);
  const {push} = useHistory();

  const handleMouseEnter = useCallback(() => {
    clearTimeout(timeoutId);

    timeoutId = setTimeout(() => {
      setIsPreviewStart(true);
    }, PLAYBACK_DELAY);
  }, [isPreviewStart]);

  const handleMouseLeave = useCallback(() => {
    clearTimeout(timeoutId);

    setIsPreviewStart(false);
  }, [isPreviewStart]);

  const handlerRouteToFilm = useCallback((evt) => {
    evt.preventDefault();
    clearTimeout(timeoutId);

    push(`${AppRoute.FILMS}/${film.id}`);
  }, []);

  useEffect(() => {
    clearTimeout(timeoutId);
  }, [!isPreviewStart]);

  return (
    <article className="small-movie-card catalog__movies-card"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handlerRouteToFilm}
    >
      <a href="#" className="small-movie-card__link">
        <div className="small-movie-card__image">
          {isPreviewStart &&
          <VideoPlayer src={film.previewVideoLink} hasCustomControls={false} isAutoPlay={true} isMuted={true}/>}
          {!isPreviewStart &&
          <img src={film.posterImage} alt={film.name} width={ImageSize.WIDTH} height={ImageSize.HEIGHT}/>}
        </div>
        <h3 className="small-movie-card__title">
          <span>{film.name}</span>
        </h3>
      </a>
    </article>
  );
};

SmallMovieCard.propTypes = {film: FilmType};
export default SmallMovieCard;
