import React from 'react';
import {useSelector} from 'react-redux';
import {Redirect, Route, Switch} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../constants/constant';
import AddReview from '../add-review/add-review';
import Film from '../film/film';
import MainPage from '../main/main';
import MyList from '../my-list/my-list';
import PageNotFound from '../page-not-found/page-not-found';
import Player from '../player/player';
import PrivateRoute from '../private-route/private-route';
import SignIn from '../sign-in/sign-in';

const App = () => {
  const {authorizationStatus} = useSelector((state) => state.USER);

  return (
    <Switch>
      <Route exact path={AppRoute.ROOT}>
        <MainPage/>
      </Route>
      <Route exact path={AppRoute.LOGIN}>
        {authorizationStatus === AuthorizationStatus.AUTH ? <Redirect to={AppRoute.ROOT} /> : <SignIn/>}
      </Route>
      <PrivateRoute exact path={AppRoute.MY_LIST} render={() => <MyList/>}/>
      <Route exact path={AppRoute.FILM} component={Film}/>
      <PrivateRoute exact path={AppRoute.REVIEW} render={(props) => <AddReview {...props}/>}/>
      <Route exact path={AppRoute.PLAYER} component={Player}/>
      <Route>
        <PageNotFound/>
      </Route>
    </Switch>
  );
};

export default App;
