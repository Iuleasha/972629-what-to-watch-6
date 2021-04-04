import PropTypes from 'prop-types';
import React from 'react';
import {useSelector} from 'react-redux';
import {Redirect, Route} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../constants/constant';
import Loader from '../loader/loading-screen';

const PrivateRoute = ({render, path, exact}) => {
  const {authorizationStatus} = useSelector((state) => state.USER);
  const {isDataLoaded} = useSelector((state) => state.DATA);

  if (!isDataLoaded) {
    return (
      <Loader/>
    );
  }

  return (
    <Route
      path={path}
      exact={exact}
      render={(routeProps) => {
        return (
          authorizationStatus === AuthorizationStatus.AUTH
            ? render(routeProps)
            : <Redirect to={AppRoute.LOGIN}/>
        );
      }}
    />
  );
};

PrivateRoute.propTypes = {
  exact: PropTypes.bool.isRequired,
  path: PropTypes.string.isRequired,
  render: PropTypes.func.isRequired,
};

export default PrivateRoute;
