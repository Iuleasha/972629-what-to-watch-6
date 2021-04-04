import PropTypes from 'prop-types';
import React from 'react';
import {useSelector} from 'react-redux';
import {Redirect, Route} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../constants/constant';
import {selectFilmsData} from '../../store/films-data/selectors';
import {selectUserData} from '../../store/user/selectors';
import Loader from '../loader/loading-screen';

const PrivateRoute = ({render, path, exact}) => {
  const {authorizationStatus} = useSelector(selectUserData);
  const {isDataLoaded} = useSelector(selectFilmsData);

  if (!isDataLoaded) {
    return (
      <Loader/>
    );
  }

  const isAuth = authorizationStatus === AuthorizationStatus.AUTH;

  const handleRender = (routeProps) => {
    return (
      isAuth ? render(routeProps) : <Redirect to={AppRoute.LOGIN}/>
    );
  };

  return (
    <Route
      path={path}
      exact={exact}
      render={handleRender}
    />
  );
};

PrivateRoute.propTypes = {
  exact: PropTypes.bool.isRequired,
  path: PropTypes.string.isRequired,
  render: PropTypes.func.isRequired,
};

export default PrivateRoute;
