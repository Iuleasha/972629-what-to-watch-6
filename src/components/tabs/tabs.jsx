import React, {useState} from 'react';
import {FilmType} from '../../types/types';
import Details from '../details/details';
import Overview from '../overview/overview';
import Reviews from '../reviews/reviews';

const Tabs = ({film}) =>{
  const navItems = [`Overview`, `Details`, `Reviews`];

  const [navItem, switchNav] = useState(navItems[0]);
  return <div className="movie-card__desc">
    <nav className="movie-nav movie-card__nav">
      <ul className="movie-nav__list">
        {navItems.map((item, index) => (<li key={item + index}
          className={`movie-nav__item ${navItem === item ? `movie-nav__item--active` : ``}`}>
          <a href="#" className="movie-nav__link" onClick={(event) => {
            event.preventDefault();
            switchNav(item);
          }}>{item}</a>
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
