import React from 'react';
import {Link} from 'react-router-dom';
import {filmType, onHover} from '../../types/types';

const ImageSize = {
  WIDTH: 280,
  HEIGHT: 175,
};

const SmallMovieCard = ({film, onHoverCallback}) => {
  return (
    <article className="small-movie-card catalog__movies-card" onMouseEnter={()=>onHoverCallback(film.id)}>
      <Link to={`/films/${film.id}`}>
        <div className="small-movie-card__image">
          <img src={film.previewImage} alt={film.name} width={ImageSize.WIDTH} height={ImageSize.HEIGHT}/>
        </div>
      </Link>
      <h3 className="small-movie-card__title">
        <Link className="small-movie-card__link" to={`/films/${film.id}`}>{film.name}</Link>
      </h3>
    </article>
  );
};

SmallMovieCard.propTypes = {film: filmType, onHoverCallback: onHover};

export default SmallMovieCard;
