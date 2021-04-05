import React, {useCallback} from 'react';
import {ActiveFilter, GenresType, OnSelectGenre} from '../../types/types';

const CatalogGenres = ({onSelectGenre, activeFilter, genres}) => {
  const getStyles = useCallback((genre) => `catalog__genres-item ${activeFilter === genre
    ? `catalog__genres-item--active` : ``}`, [activeFilter]);

  return <ul className="catalog__genres-list">
    {genres.map((genre) => <li key={genre}
      className={getStyles(genre)}>
      <a className="catalog__genres-link" onClick={() => onSelectGenre(genre)}>{genre}</a>
    </li>)}
  </ul>;
};

CatalogGenres.propTypes = {onSelectGenre: OnSelectGenre, activeFilter: ActiveFilter, genres: GenresType};

export default CatalogGenres;
