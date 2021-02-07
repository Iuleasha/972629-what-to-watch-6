import PropTypes from 'prop-types';
import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import AddReview from '../add-review/add-review';
import Film from '../film/film';
import MainPage from '../main/main';
import MyList from '../my-list/my-list';
import Player from '../player/player';
import SignIn from '../sign-in/sign-in';
import PageNotFound from '../page-not-found/page-not-found';


const App = ({movieCardInfo}) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <MainPage movieCardInfo={movieCardInfo}/>
        </Route>
        <Route exact path="/login">
          <SignIn/>
        </Route>
        <Route exact path="/mylist">
          <MyList/>
        </Route>
        <Route exact path="/films/:id">
          <Film/>
        </Route>
        <Route exact path="/films/:id/review">
          <AddReview/>
        </Route>
        <Route exact path="/player/:id">
          <Player/>
        </Route>
        <Route>
          <PageNotFound/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  movieCardInfo: PropTypes.shape({
    TITLE: PropTypes.string.isRequired,
    GENRE: PropTypes.string.isRequired,
    RELEASE_DATE: PropTypes.number.isRequired,
  }),
};

export default App;
