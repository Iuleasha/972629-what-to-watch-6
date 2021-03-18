import React from 'react';
import {connect} from 'react-redux';
import {ActionCreator} from '../../store/action';
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

const mapStateToProps = (state) => ({
  genre: state.genre,
  films: state.films,
});

const mapDispatchToProps = (dispatch) => ({
  onSelectGenre(type) {
    dispatch(ActionCreator.setFilter(type));
  },
});

export {MoreLikeThis};
export default connect(mapStateToProps, mapDispatchToProps)(MoreLikeThis);


