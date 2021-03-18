import React from 'react';
import {ActiveFilter, OnSelectGenre} from '../../types/types';
import {GENRES_ARRAY} from '../../utils/constant/constant';


const CatalogGenres = ({onSelectGenre, activeFilter}) => {
  return <ul className="catalog__genres-list">
    {GENRES_ARRAY.map((item) => <li key={item.type}
      className={`catalog__genres-item ${activeFilter === item.type ? `catalog__genres-item--active` : ``}`}>
      <a className="catalog__genres-link" onClick={() => onSelectGenre(item.type)}>{item.title}</a>
    </li>)}
  </ul>;
};

CatalogGenres.propTypes = {onSelectGenre: OnSelectGenre, activeFilter: ActiveFilter};
export default CatalogGenres;
