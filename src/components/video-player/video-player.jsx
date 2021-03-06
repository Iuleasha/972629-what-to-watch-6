import PropTypes from 'prop-types';
import React, {useEffect, useRef, useState} from 'react';
import {useHistory} from 'react-router-dom';
import {ButtonIcon} from '../../constants/constant';
import {useInterval} from '../../hooks/use-interval';
import {formatFilmDuration} from '../../utils/utils';

const PLAY_BUTTON_SIZE = 19;
const FULL_SCREEN_BUTTON_SIZE = 27;
const MAX_TOGGLER_LENGTH = 100;
const TIME_INTERVAL = 1000;

const VideoPlayer = ({isAutoPlay, isMuted, hasCustomControls, src, name, filmId}) => {
  const {push} = useHistory();

  const videoRef = useRef();

  const [filmDuration, setDuration] = useState(0);

  const [isRunning, setIsRunning] = useState(false);

  const [currentTime, setCurrentTime] = useState(0);

  const [timeValue, setTimeValue] = useState(`00:00:00`);

  const handlePlay = () => {
    setIsRunning(!isRunning);
  };

  const handlerExit = () => {
    push(`/films/${filmId}`);
  };

  const openFullScreen = () => {
    videoRef.current.requestFullscreen();
  };

  useEffect(() => {
    setTimeValue(formatFilmDuration(filmDuration));
  }, [filmDuration]);

  useEffect(() => {
    if (isRunning) {
      videoRef.current.play();
      setDuration(Math.round(videoRef.current.duration));
    } else {
      videoRef.current.pause();
    }
  }, [isRunning]);

  useEffect(() => {
    if (isAutoPlay) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
  }, [isAutoPlay]);

  useInterval(() => {
    setCurrentTime(Math.round(videoRef.current.currentTime));
    setDuration(Math.round(videoRef.current.duration - currentTime));
  }, isRunning ? TIME_INTERVAL : null);

  return (
    <>
      <video ref={videoRef} className="player__video" src={src} muted={isMuted} controls={false} autoPlay={isAutoPlay}/>

      {hasCustomControls && <>
        <button type="button" className="player__exit" onClick={handlerExit}>Exit</button>
        <div className="player__controls">
          <div className="player__controls-row">
            <div className="player__time">
              <progress className="player__progress" value={currentTime} max={filmDuration}/>
              <div className="player__toggler" style={{left: `${currentTime * MAX_TOGGLER_LENGTH / filmDuration}%`}}>Toggler</div>
            </div>
            <div className="player__time-value">{timeValue}</div>
          </div>

          <div className="player__controls-row">
            <button type="button" className='player__play' onClick={handlePlay}>
              <svg viewBox={`0 0 ${PLAY_BUTTON_SIZE} ${PLAY_BUTTON_SIZE}`} width={PLAY_BUTTON_SIZE}
                height={PLAY_BUTTON_SIZE}>
                <use xlinkHref={!isRunning ? ButtonIcon.PLAY : ButtonIcon.PAUSE} />
              </svg>
              <span>Play</span>
            </button>

            <div className="player__name">{name}</div>

            <button type="button" className="player__full-screen" onClick={openFullScreen}>
              <svg viewBox={`0 0 ${FULL_SCREEN_BUTTON_SIZE} ${FULL_SCREEN_BUTTON_SIZE}`} width={FULL_SCREEN_BUTTON_SIZE}
                height={FULL_SCREEN_BUTTON_SIZE}>
                <use xlinkHref={ButtonIcon.FULL_SCREEN}/>
              </svg>
              <span>Full screen</span>
            </button>
          </div>
        </div>
      </>}
    </>
  );
};

VideoPlayer.propTypes = {
  isAutoPlay: PropTypes.bool.isRequired,
  isMuted: PropTypes.bool.isRequired,
  hasCustomControls: PropTypes.bool.isRequired,
  src: PropTypes.string.isRequired,
  name: PropTypes.string,
  filmId: PropTypes.string,
};

export default VideoPlayer;
