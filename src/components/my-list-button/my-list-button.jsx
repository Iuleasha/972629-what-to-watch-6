import * as PropTypes from 'prop-types';
import React, {useCallback, useState} from 'react';
import {connect} from 'react-redux';
import {useHistory} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../constant';
import {switchFavoriteStatus} from '../../store/api-actions';
import MovieCardButton from '../movie-card-button/movie-card-button';

const ADD_BUTTON_ICON = `#add`;
const INLIST_BUTTON_ICON = `#in-list`;
const BUTTON_TEXT = `My list`;

const MyListButton = ({id, isFavorite, onSwitchStatus, authorizationStatus}) => {
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

  return <MovieCardButton buttonText={BUTTON_TEXT} icon={status ? INLIST_BUTTON_ICON : ADD_BUTTON_ICON}
    handleCallback={handleSwitch}/>;
};

MyListButton.propTypes = {
  id: PropTypes.number.isRequired,
  isFavorite: PropTypes.bool.isRequired,
  authorizationStatus: PropTypes.string.isRequired,
  onSwitchStatus: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  authorizationStatus: state.authorizationStatus,
});

const mapDispatchToProps = (dispatch) => ({
  onSwitchStatus(info) {
    dispatch(switchFavoriteStatus(info));
  },
});

export {MyListButton};
export default connect(mapStateToProps, mapDispatchToProps)(MyListButton);
