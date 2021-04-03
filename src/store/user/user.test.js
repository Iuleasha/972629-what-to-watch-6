import {AuthorizationStatus} from '../../constants/constant';
import {requireAuthorization} from '../action';
import {user} from './user';

describe(`UserReducer`, () => {
  it(`Reducer should authorize user`, () => {
    const state = {authorizationStatus: AuthorizationStatus.NO_AUTH};

    expect(user(state, requireAuthorization(AuthorizationStatus.AUTH))).toEqual({authorizationStatus: AuthorizationStatus.AUTH});
  });
});
