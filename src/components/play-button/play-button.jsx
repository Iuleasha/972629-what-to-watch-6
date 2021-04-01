import PropTypes from 'prop-types';
import React, {useCallback} from 'react';
import {useHistory} from 'react-router-dom';
import MovieCardButton from '../movie-card-button/movie-card-button';

const PLAY_BUTTON_ICON = `#play-s`;
const BUTTON_TEXT = `Play`;

const PlayButton = ({id}) => {
  const history = useHistory();
  const handleClick = useCallback(() => {
    history.push(`/player/${id}`);
  }, [id]);

  return <MovieCardButton buttonText={BUTTON_TEXT} icon={PLAY_BUTTON_ICON} handleCallback={handleClick}/>;
};

PlayButton.propTypes = {id: PropTypes.number.isRequired};

export default PlayButton;
