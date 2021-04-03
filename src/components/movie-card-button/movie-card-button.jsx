import * as PropTypes from 'prop-types';
import React from 'react';
import {MovieCardButtonSize} from '../../constants/constant';

const MovieCardButton = ({icon, buttonText, handleCallback}) =>{
  return <button className="btn movie-card__button" type="button" onClick={handleCallback}>
    {icon && <svg viewBox={`0 0 ${MovieCardButtonSize.WIDTH} ${MovieCardButtonSize.HEIGHT}`}
      width={MovieCardButtonSize.WIDTH} height={MovieCardButtonSize.HEIGHT}>
      <use xlinkHref={icon}/>
    </svg>}
    <span>{buttonText}</span>
  </button>;
};

MovieCardButton.propTypes = {
  icon: PropTypes.string,
  buttonText: PropTypes.string.isRequired,
  handleCallback: PropTypes.func.isRequired,
};

export default MovieCardButton;
