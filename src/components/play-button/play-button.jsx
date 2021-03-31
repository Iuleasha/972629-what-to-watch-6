import PropTypes from 'prop-types';
import React, {useCallback} from 'react';
import {useHistory} from 'react-router-dom';
import {MovieCardButtonSize} from '../../utils/constant/constant';

const PlayButton = ({id}) => {
  const history = useHistory();
  const handleClick = useCallback(() =>{
    history.push(`/player/${id}`);
  }, [id]);

  return <button className="btn btn--play movie-card__button" type="button" onClick={()=>handleClick()}>
    <svg viewBox={`0 0 ${MovieCardButtonSize.WIDTH} ${MovieCardButtonSize.WIDTH}`}
      width={MovieCardButtonSize.WIDTH} height={MovieCardButtonSize.WIDTH}>
      <use xlinkHref="#play-s"/>
    </svg>
    <span>Play</span>
  </button>;

};

PlayButton.propTypes = {id: PropTypes.number.isRequired};

export default PlayButton;
