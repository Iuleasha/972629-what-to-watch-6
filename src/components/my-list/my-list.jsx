import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {HeaderMode} from '../../constants/constant';
import {fetchFavorite} from '../../store/api-actions';
import Footer from '../footer/footer';
import Header from '../header/header';
import Loader from '../loader/loading-screen';
import MovieList from '../movie-list/movie-list';

const MyList = () => {
  const {favorite} = useSelector((state) => state.DATA);

  const dispatch = useDispatch();

  const onLoadData = () => {
    dispatch(fetchFavorite());
  };

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

export default MyList;
