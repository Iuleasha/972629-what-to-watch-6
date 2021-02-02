import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

const movieCardInfo = {
  title: `The Grand Budapest Hotel`,
  genre: `Drama`,
  releaseDate: 2014,
};

ReactDOM.render(
    <App
      movieCardInfo={movieCardInfo}
    />,
    document.querySelector(`#root`),
);
