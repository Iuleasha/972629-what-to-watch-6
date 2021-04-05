import * as PropTypes from 'prop-types';
import React from 'react';
import {MovieCardButtonSize} from '../../constants/constant';

const MovieCardButton = ({icon, buttonText, handleClick}) => {
  return <button className="btn movie-card__button" type="button" onClick={handleClick}>
    {icon && <svg viewBox={`0 0 ${MovieCardButtonSize.WIDTH} ${MovieCardButtonSize.HEIGHT}`}
      width={MovieCardButtonSize.WIDTH} height={MovieCardButtonSize.HEIGHT}>
      <use xlinkHref={icon}/>
    </svg>}
    {buttonText && <span>{buttonText}</span>}
  </button>;
};

MovieCardButton.propTypes = {
  icon: PropTypes.string,
  buttonText: PropTypes.string,
  handleClick: PropTypes.func,
};

export default MovieCardButton;
