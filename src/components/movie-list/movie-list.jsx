import React, {useState} from 'react';
import {filmsType} from '../../types/types';
import SmallMovieCard from '../small-movie-card/small-movie-card';

const MovieList = ({films}) => {
  const [filmId, setId] = useState(films[0].id);

  const showVideoPreview = (id) =>{
    setId(id);
  };

  return <div className="catalog__movies-list">
    {films.map((item) => <SmallMovieCard film={item} filmId={filmId} key={item.id} onHoverCallback={showVideoPreview}/>)}
  </div>;

};

MovieList.propTypes = {films: filmsType};

export default MovieList;
