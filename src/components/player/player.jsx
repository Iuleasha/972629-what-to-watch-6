import * as PropTypes from 'prop-types';
import React, {useMemo} from 'react';
import {useSelector} from 'react-redux';
import Loader from '../loader/loading-screen';
import VideoPlayer from '../video-player/video-player';

const Player = ({match}) => {
  const {films, isDataLoaded} = useSelector((state) => state.DATA);

  const {id} = match.params;

  const film = useMemo(() => films.find((item) => String(item.id) === id), [id, films]);

  if (!isDataLoaded) {
    return (
      <Loader/>
    );
  }

  return (<div className="player">
    <VideoPlayer src={film.videoLink} isMuted={false} hasCustomControls={true} isAutoPlay={false} name={film.name}
      filmId={id}/>
  </div>
  );
};

Player.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }),
};

export default Player;
