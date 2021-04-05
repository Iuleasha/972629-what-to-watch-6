import React from 'react';
import {FilmsType} from '../../types/types';
import SmallMovieCard from '../small-movie-card/small-movie-card';

const MovieList = ({films}) => {
  return <div className="catalog__movies-list">
    {!films.length && <h3>No films</h3>}
    {films.map((film) => <SmallMovieCard film={film} key={film.id}/>)}
  </div>;

};

MovieList.propTypes = {films: FilmsType};

export default MovieList;
