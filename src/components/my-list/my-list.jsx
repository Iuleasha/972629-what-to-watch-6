import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {HeaderMode} from '../../constant';
import {fetchFavorite} from '../../store/api-actions';
import {FilmsType} from '../../types/types';
import Footer from '../footer/footer';
import Header from '../header/header';
import Loader from '../loader/loading-screen';
import MovieList from '../movie-list/movie-list';

const MyList = ({favorite, onLoadData}) => {
  useEffect(() => {
    if (favorite === undefined) {
      onLoadData();
    }
  }, [favorite !== undefined]);

  return (<div className="user-page">
    <Header title="My list" type={HeaderMode.USER_PAGE}/>

    <section className="catalog">
      <h2 className="catalog__title visually-hidden">Catalog</h2>

      {favorite !== undefined ? <MovieList films={favorite}/> : <Loader/>}
    </section>

    <Footer/>
  </div>);
};

MyList.propTypes = {favorite: FilmsType};

const mapStateToProps = (state) => ({
  favorite: state.favorite,
});

const mapDispatchToProps = (dispatch) => ({
  onLoadData() {
    dispatch(fetchFavorite());
  },
});

export {MyList};
export default connect(mapStateToProps, mapDispatchToProps)(MyList);
