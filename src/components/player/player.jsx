import React, {useMemo} from 'react';
import {useSelector} from 'react-redux';
import {useParams} from 'react-router-dom';
import Loader from '../loader/loading-screen';
import VideoPlayer from '../video-player/video-player';

const Player = () => {
  const {films, isDataLoaded} = useSelector((state) => state.DATA);

  const {id} = useParams();

  const film = useMemo(() => films.find((item) => String(item.id) === id), [id, films]);

  if (!isDataLoaded) {
    return (
      <Loader/>
    );
  }

  return (<div className="player">
    <VideoPlayer src={film.videoLink} isMuted={false} hasCustomControls={true} isAutoPlay={false} name={film.name}/>
  </div>
  );
};

export default Player;
