import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {FilmsType, MovieCardType} from '../../types/types';
import AddReview from '../add-review/add-review';
import Film from '../film/film';
import MainPage from '../main/main';
import MyList from '../my-list/my-list';
import PageNotFound from '../page-not-found/page-not-found';
import Player from '../player/player';
import SignIn from '../sign-in/sign-in';

const App = ({movieCardInfo, films}) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <MainPage movieCardInfo={movieCardInfo}
            films={films}/>
        </Route>
        <Route exact path="/login">
          <SignIn/>
        </Route>
        <Route exact path="/mylist">
          <MyList films={films}/>
        </Route>
        <Route exact path="/films/:id">
          <Film films={films}/>
        </Route>
        <Route exact path="/films/:id/review">
          <AddReview films = {films}/>
        </Route>
        <Route exact path="/player/:id">
          <Player films={films}/>
        </Route>
        <Route>
          <PageNotFound/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {movieCardInfo: MovieCardType, films: FilmsType};

export default App;
