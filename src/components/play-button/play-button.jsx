import PropTypes from 'prop-types';
import React, {useCallback} from 'react';
import {useHistory} from 'react-router-dom';
import {ButtonIcon} from '../../constants/constant';
import MovieCardButton from '../movie-card-button/movie-card-button';

const BUTTON_TEXT = `Play`;

const PlayButton = ({id}) => {
  const history = useHistory();

  const handleClick = useCallback(() => {
    history.push(`/player/${id}`);
  }, [id]);

  return <MovieCardButton buttonText={BUTTON_TEXT} icon={ButtonIcon.PLAY} handleClick={handleClick}/>;
};

PlayButton.propTypes = {id: PropTypes.string.isRequired};

export default PlayButton;
