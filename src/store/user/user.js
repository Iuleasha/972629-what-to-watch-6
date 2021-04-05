import {createReducer} from '@reduxjs/toolkit';
import {AuthorizationStatus} from '../../constants/constant';
import {requireAuthorization, setUser} from '../action';

const initialState = {
  authorizationStatus: AuthorizationStatus.NO_AUTH,
};

const user = createReducer(initialState, (builder) => {
  builder.addCase(requireAuthorization, (state, action) => {
    state.authorizationStatus = action.payload;
  });
  builder.addCase(setUser, (state, action) => {
    state.user = action.payload;
  });
});

export {user};
