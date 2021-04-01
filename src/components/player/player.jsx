import PropTypes from 'prop-types';
import React, {useMemo} from 'react';
import {connect} from 'react-redux';
import {useParams} from 'react-router-dom';
import {FilmsType} from '../../types/types';
import Loader from '../loader/loading-screen';
import VideoPlayer from '../video-player/video-player';

const Player = ({films, isDataLoaded}) => {
  const {id} = useParams();
  const film = useMemo(()=> films.find((item) => String(item.id) === id), [id, films]);


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

Player.propTypes = {
  films: FilmsType,
  isDataLoaded: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  films: state.films,
  isDataLoaded: state.isDataLoaded,
});

export {Player};
export default connect(mapStateToProps)(Player);
