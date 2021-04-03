import React from 'react';
import {Route, Switch} from 'react-router-dom';
import {AppRoute} from '../../constants/constant';
import AddReview from '../add-review/add-review';
import Film from '../film/film';
import MainPage from '../main/main';
import MyList from '../my-list/my-list';
import PageNotFound from '../page-not-found/page-not-found';
import Player from '../player/player';
import PrivateRoute from '../private-route/private-route';
import SignIn from '../sign-in/sign-in';

const App = () => {
  return (
    <Switch>
      <Route exact path={AppRoute.ROOT}>
        <MainPage/>
      </Route>
      <Route exact path={AppRoute.LOGIN}>
        <SignIn/>
      </Route>
      <PrivateRoute exact path={AppRoute.MY_LIST} render={() => <MyList/>}/>
      <Route exact path={AppRoute.FILM}>
        <Film/>
      </Route>
      <PrivateRoute exact path={AppRoute.REVIEW} render={() => <AddReview/>}/>
      <Route exact path={AppRoute.PLAYER}>
        <Player/>
      </Route>
      <Route>
        <PageNotFound/>
      </Route>
    </Switch>
  );
};

export default App;
