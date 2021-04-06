import React from 'react';
import {FilmType} from '../../types/types';
import {generateRating} from '../../utils/utils';


const Overview = ({film}) => {
  const starring = film.starring.map((actor, index, array) => <span key={`starring-${actor}`}>{actor}{index < array.length - 1 ? `, ` : ``}</span>);
  const rating = generateRating(film.rating);

  return (
    <>
      <div className="movie-rating">
        <div className="movie-rating__score">{film.rating}</div>
        <p className="movie-rating__meta">
          <span className="movie-rating__level">{rating}</span>
          <span className="movie-rating__count">{film.scoresCount} ratings</span>
        </p>
      </div>

      <div className="movie-card__text">
        <p>{film.description}</p>

        <p className="movie-card__director"><strong>Director: {film.director}</strong></p>

        <p className="movie-card__starring"><strong>Starring: {starring}
        </strong></p>
      </div>
    </>
  );
};

Overview.propTypes = {film: FilmType};

export default Overview;
