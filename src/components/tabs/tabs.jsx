import React, {useCallback, useEffect, useState} from 'react';
import {MOVIE_CARD_NAV_ITEMS} from '../../constants/constant';
import {FilmType} from '../../types/types';
import Details from '../details/details';
import Overview from '../overview/overview';
import Reviews from '../reviews/reviews';

const Tabs = ({film}) => {
  const [navItem, switchNavItem] = useState(MOVIE_CARD_NAV_ITEMS[0]);
  const getStyles = useCallback((tab) => `movie-nav__item ${navItem === tab ? `movie-nav__item--active` : ``}`, [navItem]);

  useEffect(() => {
    switchNavItem(MOVIE_CARD_NAV_ITEMS[0]);
  }, [film.id]);

  return <div className="movie-card__desc">
    <nav className="movie-nav movie-card__nav">
      <ul className="movie-nav__list">
        {MOVIE_CARD_NAV_ITEMS.map((tab, index) => (
          <li key={tab + index} className={getStyles(tab)}>
            <a href="#" className="movie-nav__link" onClick={(event) => {
              event.preventDefault();
              switchNavItem(tab);
            }}>{tab}</a>
          </li>))}
      </ul>
    </nav>

    {navItem === `Overview` && <Overview film={film}/>}
    {navItem === `Details` && <Details film={film}/>}
    {navItem === `Reviews` && <Reviews filmId={film.id}/>}
  </div>;
};

Tabs.propTypes = {film: FilmType};

export default Tabs;
