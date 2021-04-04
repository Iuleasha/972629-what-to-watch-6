import * as PropTypes from 'prop-types';
import React, {useCallback, useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useHistory} from 'react-router-dom';
import {AppRoute, AuthorizationStatus, ButtonIcon} from '../../constants/constant';
import {postFavoriteStatus} from '../../store/api-actions';
import MovieCardButton from '../movie-card-button/movie-card-button';

const BUTTON_TEXT = `My list`;

const MyListButton = ({id, isFavorite}) => {
  const {authorizationStatus} = useSelector((state) => state.USER);

  const dispatch = useDispatch();

  const onSwitchStatus = (info) => {
    dispatch(postFavoriteStatus(info));
  };

  const [status, switchStatus] = useState(isFavorite);

  const history = useHistory();

  const isLogIn = authorizationStatus === AuthorizationStatus.AUTH;

  const handleSwitch = useCallback(() => {
    if (!isLogIn) {
      history.push(AppRoute.LOGIN);

      return;
    }

    switchStatus(!status);
    onSwitchStatus({
      id,
      status: Number(!status),
    });
  }, [status, id, authorizationStatus]);

  useEffect(()=>{
    switchStatus(isFavorite);
  }, [isFavorite]);

  return <MovieCardButton buttonText={BUTTON_TEXT} icon={status ? ButtonIcon.INLIST : ButtonIcon.ADD}
    handleCallback={handleSwitch}/>;
};

MyListButton.propTypes = {
  id: PropTypes.string.isRequired,
  isFavorite: PropTypes.bool.isRequired,
};

export default MyListButton;
