import React, {useCallback, useRef, useState} from 'react';
import {Link} from 'react-router-dom';
import {FilmType} from '../../types/types';
import VideoPlayer from '../video-player/video-player';

const ImageSize = {
  WIDTH: 280,
  HEIGHT: 175,
};
const PLAYBACK_DELAY = 1000;

const SmallMovieCard = (props) => {
  const {film} = props;
  const [isPreviewStart, showPreview] = useState(false);
  const timer = useRef(null);

  const startVideoPlayback = useCallback(() => {
    timer.current = null;
    showPreview(true);
  }, [showPreview]);

  const handleMouseLeave = useCallback(() => {
    showPreview(false);
    clearTimeout(timer.current);
    timer.current = null;
  }, [showPreview]);


  const handleMouseEnter = useCallback(() => {
    timer.current = setTimeout(startVideoPlayback, PLAYBACK_DELAY);
    return handleMouseLeave;
  }, [handleMouseLeave, startVideoPlayback]);


  return (
    <article className="small-movie-card catalog__movies-card"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Link to={`/films/${film.id}`} className="small-movie-card__link">
        <div className="small-movie-card__image">
          {isPreviewStart &&
          <VideoPlayer src={film.previewVideoLink} hasControls={false} isAutoPlay={true} isMuted={true}/>}
          {!isPreviewStart &&
          <img src={film.posterImage} alt={film.name} width={ImageSize.WIDTH} height={ImageSize.HEIGHT}/>}
        </div>
        <h3 className="small-movie-card__title">
          <span>{film.name}</span>
        </h3>
      </Link>
    </article>
  );
};

SmallMovieCard.propTypes = {film: FilmType};
export default SmallMovieCard;
