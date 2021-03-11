import React from 'react';
import {FilmType} from '../../types/types';
import {generateRating} from '../../utils/utils';


const Overview = ({film}) => {
  return (
    <>
      <div className="movie-rating">
        <div className="movie-rating__score">{film.rating}</div>
        <p className="movie-rating__meta">
          <span className="movie-rating__level">{generateRating(film.rating)}</span>
          <span className="movie-rating__count">{film.scoresCount} ratings</span>
        </p>
      </div>

      <div className="movie-card__text">
        <p>{film.fullDescription}</p>

        <p className="movie-card__director"><strong>Director: {film.director}</strong></p>

        <p className="movie-card__starring"><strong>Starring: {film.starring.map((item, index, array) => <span key={`starring-${index}`}>{item}{index < array.length - 1 ? `, ` : ``}</span>)}
        </strong></p>
      </div>
    </>
  );
};

Overview.propTypes = {film: FilmType};
export default Overview;
