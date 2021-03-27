import React from 'react';
import {ActiveFilter, GenresType, OnSelectGenre} from '../../types/types';

const CatalogGenres = ({onSelectGenre, activeFilter, genres}) => {
  return <ul className="catalog__genres-list">
    {genres.map((item) => <li key={item}
      className={`catalog__genres-item ${activeFilter === item ? `catalog__genres-item--active` : ``}`}>
      <a className="catalog__genres-link" onClick={() => onSelectGenre(item)}>{item}</a>
    </li>)}
  </ul>;
};

CatalogGenres.propTypes = {onSelectGenre: OnSelectGenre, activeFilter: ActiveFilter, genres: GenresType};

export default CatalogGenres;
