import React from 'react';
import MainPage from '../main/main';
import PropTypes from 'prop-types';

const App = ({movieCardInfo}) => {
  return <MainPage movieCardInfo={movieCardInfo}/>;
};

App.propTypes = {
  movieCardInfo: PropTypes.shape({
    title: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    releaseDate: PropTypes.number.isRequired,
  }),
};

export default App;
