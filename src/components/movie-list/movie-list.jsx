import React, {useState} from 'react';
import {FilmsType} from '../../types/types';
import SmallMovieCard from '../small-movie-card/small-movie-card';

const MovieList = ({films}) => {
  const [filmId, setId] = useState(0);

  const showVideoPreview = (id) =>{
    setId(id);

    return filmId;
  };

  return <div className="catalog__movies-list">
    {films.map((item) => <SmallMovieCard film={item} key={item.id} onHoverCallback={showVideoPreview}/>)}
  </div>;

};

MovieList.propTypes = {films: FilmsType};

export default MovieList;
