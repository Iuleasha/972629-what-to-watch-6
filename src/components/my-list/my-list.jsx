import React from 'react';
import {FilmsType} from '../../types/types';
import Footer from '../footer/footer';
import Header from '../header/header';
import MovieList from '../movie-list/movie-list';
import {HeaderMode} from '../../utils/constant/constant';

const MyList = ({films}) => {
  return (<div className="user-page">
    <Header title="My list" type={HeaderMode.USER_PAGE}/>

    <section className="catalog">
      <h2 className="catalog__title visually-hidden">Catalog</h2>

      <MovieList films={films}/>
    </section>

    <Footer/>
  </div>);
};
MyList.propTypes = {films: FilmsType};
export default MyList;
