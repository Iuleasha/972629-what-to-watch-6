import React from 'react';
import {FilterActionType} from '../../store/action';
import {ActiveFilter, OnSelectGenre} from '../../types/types';

export const genresArray = [
  {title: `All genres`, type: FilterActionType.ALL_GENRES},
  {title: `Comedies`, type: FilterActionType.COMEDIES},
  {title: `Crime`, type: FilterActionType.CRIME},
  {title: `Documentary`, type: FilterActionType.DOCUMENTARY},
  {title: `Dramas`, type: FilterActionType.DRAMAS},
  {title: `Horror`, type: FilterActionType.HORROR},
  {title: `Kids & Family`, type: FilterActionType.KIDS_AND_FAMILY},
  {title: `Romance`, type: FilterActionType.ROMANCE},
  {title: `Sci-Fi`, type: FilterActionType.SCI_FI},
  {title: `Thrillers`, type: FilterActionType.THRILLERS},
];
const CatalogGenres = ({onSelectGenre, activeFilter}) => {


  return <ul className="catalog__genres-list">
    {genresArray.map((item) => <li key={item.type}
      className={`catalog__genres-item ${activeFilter === item.type ? `catalog__genres-item--active` : ``}`}>
      <a className="catalog__genres-link" onClick={() => onSelectGenre(item.type)}>{item.title}</a>
    </li>)}
  </ul>;
};

CatalogGenres.propTypes = {onSelectGenre: OnSelectGenre, activeFilter: ActiveFilter};
export default CatalogGenres;
