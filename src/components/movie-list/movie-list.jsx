import React from 'react';
import {FilmsType} from '../../types/types';
import SmallMovieCard from '../small-movie-card/small-movie-card';

const MovieList = ({films}) => {


  return <div className="catalog__movies-list">
    {films.map((item) => <SmallMovieCard film={item} key={item.id}/>)}
  </div>;

};

MovieList.propTypes = {films: FilmsType};

export default MovieList;
