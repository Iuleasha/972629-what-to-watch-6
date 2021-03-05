import PropTypes from 'prop-types';
import React from 'react';

const VideoPlayer = ({isAutoPlay, isMuted, hasControls, src}) => {
  return (
    <video className="player__video" src={src} muted={isMuted} controls={hasControls} autoPlay={isAutoPlay}/>
  );
};

VideoPlayer.propTypes = {
  isAutoPlay: PropTypes.bool.isRequired,
  isMuted: PropTypes.bool.isRequired,
  hasControls: PropTypes.bool.isRequired,
  src: PropTypes.string.isRequired,
};

export default VideoPlayer;
