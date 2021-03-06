import React from 'react';
import {Link} from 'react-router-dom';
import {HeaderMode} from '../../constants/constant';
import Footer from '../footer/footer';
import Header from '../header/header';

const PageNotFound = () => {
  return (
    <div className="user-page">
      <Header type={HeaderMode.USER_PAGE}/>
      <div className="sign-in user-page__content">
        <h1>404 Not Found</h1>
        <Link to="/">Вернуться на главную страницу</Link>
      </div>
      <Footer/>
    </div>
  );
};

export default PageNotFound;
