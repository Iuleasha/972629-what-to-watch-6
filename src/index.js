import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

const MovieCardInfo = {
  TITLE: `The Grand Budapest Hotel`,
  GENRE: `Drama`,
  RELEASE_DATE: 2014,
};

ReactDOM.render(
    <App movieCardInfo={MovieCardInfo}/>,
    document.querySelector(`#root`),
);
