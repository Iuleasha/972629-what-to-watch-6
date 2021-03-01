import React from 'react';
import {useParams, useHistory} from 'react-router-dom';
import {filmsType} from '../../types/types';

const MAX_PLAYER_PROGRESS = 100;
const TEMP_VALUE = 30;
const PLAY_BUTTON_SIZE = 19;
const FULL_SCREEN_BUTTON_SIZE = 27;

const Player = ({films}) => {
  const {id} = useParams();
  const {push} = useHistory();
  const film = films.find((item) => String(item.id) === id);

  return (<div className="player">
    <video src="#" className="player__video" poster={film.posterImage}/>
    <button type="button" className="player__exit" onClick={()=>push(`/films/${id}`)}>Exit</button>
    <div className="player__controls">
      <div className="player__controls-row">
        <div className="player__time">
          <progress className="player__progress" value={TEMP_VALUE} max={MAX_PLAYER_PROGRESS}/>
          <div className="player__toggler" style={{left: `${TEMP_VALUE}%`}}>Toggler</div>
        </div>
        <div className="player__time-value">1:30:29</div>
      </div>
      <div className="player__controls-row">
        <button type="button" className="player__play">
          <svg viewBox={`0 0 ${PLAY_BUTTON_SIZE} ${PLAY_BUTTON_SIZE}`} width={PLAY_BUTTON_SIZE} height={PLAY_BUTTON_SIZE}>
            <use xlinkHref="#play-s"/>
          </svg>
          <span>Play</span>
        </button>
        <div className="player__name">Transpotting</div>
        <button type="button" className="player__full-screen">
          <svg viewBox={`0 0 ${FULL_SCREEN_BUTTON_SIZE} ${FULL_SCREEN_BUTTON_SIZE}`} width={FULL_SCREEN_BUTTON_SIZE} height={FULL_SCREEN_BUTTON_SIZE}>
            <use xlinkHref="#full-screen"/>
          </svg>
          <span>Full screen</span>
        </button>
      </div>
    </div>
  </div>
  );
};
Player.propTypes = {films: filmsType};

export default Player;
