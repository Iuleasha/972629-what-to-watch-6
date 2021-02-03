import PropTypes from 'prop-types';
import React from 'react';
import MainPage from '../main/main';

const App = ({movieCardInfo}) => {
  return <MainPage movieCardInfo={movieCardInfo}/>;
};

App.propTypes = {
  movieCardInfo: PropTypes.shape({
    TITLE: PropTypes.string.isRequired,
    GENRE: PropTypes.string.isRequired,
    RELEASE_DATE: PropTypes.number.isRequired,
  }),
};

export default App;
