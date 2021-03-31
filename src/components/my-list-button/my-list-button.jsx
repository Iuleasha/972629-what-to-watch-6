import React from 'react';
import {MovieCardButtonSize} from '../../utils/constant/constant';

const MyListButton = () => {
  return <button className="btn btn--list movie-card__button" type="button">
    <svg viewBox={`0 0 ${MovieCardButtonSize.WIDTH} ${MovieCardButtonSize.HEIGHT}`}
      width={MovieCardButtonSize.WIDTH} height={MovieCardButtonSize.HEIGHT}>
      <use xlinkHref="#add"/>
    </svg>
    <span>My list</span>
  </button>;
};

export default MyListButton;
