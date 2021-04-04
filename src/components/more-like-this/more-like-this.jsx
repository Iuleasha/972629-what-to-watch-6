import React from 'react';
import {FilmsType} from '../../types/types';
import MovieList from '../movie-list/movie-list';

const MoreLikeThis = ({films}) => {
  return (<>
    <section className="catalog catalog--like-this">
      <h2 className="catalog__title">More like this</h2>

      <MovieList films={films}/>
    </section>
  </>);
};

MoreLikeThis.propTypes = {films: FilmsType};

export default MoreLikeThis;


