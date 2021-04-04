import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import {useDebounce} from '../../hooks/debounce';
import {FilmType} from '../../types/types';
import VideoPlayer from '../video-player/video-player';

const ImageSize = {
  WIDTH: 280,
  HEIGHT: 175,
};
const PLAYBACK_DELAY = 1000;

const SmallMovieCard = ({film}) => {
  const [isHovered, hover] = useState(false);

  const [isPreviewStart, showPreview] = useState(false);

  const debouncedSearchTerm = useDebounce(isHovered, PLAYBACK_DELAY);

  const handleMouseEnter = () => {
    hover(true);
  };

  const handleMouseLeave = () => {
    hover(false);
    showPreview(false);
  };

  useEffect(() => {
    showPreview(isHovered);
  }, [debouncedSearchTerm]);

  return (
    <article className="small-movie-card catalog__movies-card"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Link to={`/films/${film.id}`} className="small-movie-card__link">
        <div className="small-movie-card__image">
          {isPreviewStart &&
          <VideoPlayer src={film.previewVideoLink} hasCustomControls={false} isAutoPlay={true} isMuted={true} />}
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
