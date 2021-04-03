import {AuthorizationStatus} from '../../constants/constant';
import {user} from './user';

describe(`UserReducer`, () => {
  it(`Reducer should authorize user`, () => {
    const state = {authorizationStatus: AuthorizationStatus.NO_AUTH};

    expect(user(state, AuthorizationStatus.AUTH)).toEqual({authorizationStatus: AuthorizationStatus.AUTH});
  });
});
