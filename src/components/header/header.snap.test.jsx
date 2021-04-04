import {configureStore} from '@reduxjs/toolkit';
import {render} from '@testing-library/react';
import {createMemoryHistory} from 'history';
import React from 'react';
import {Provider} from 'react-redux';
import {Router} from 'react-router-dom';
import {adaptUserData} from '../../adapters/user';
import {AuthorizationStatus} from '../../constants/constant';
import {AUTH_INFO_MOCK} from '../../constants/mock';
import {requireAuthorization, setUser} from '../../store/action';
import reducer from '../../store/root-reducer';
import Header from './header';

const store = configureStore({reducer});

describe(`Test Header`, () => {
  const history = createMemoryHistory();

  test(`Should  render correctly with title`, () => {
    const {container} = render(<Provider store={store}><Router history={history}><Header
      title="Sign In"/></Router></Provider>);

    expect(container).toMatchSnapshot();
  });

  test(`Should render correctly with breadcrumbs`, () => {
    const {container} = render(<Provider store={store}><Router history={history}><Header
      breadcrumbs={{name: `Test`, id: `1`}}/></Router></Provider>);

    expect(container).toMatchSnapshot();
  });

  test(`Should render correctly with user`, () => {
    store.dispatch((dispatch) => {
      dispatch(setUser(adaptUserData(AUTH_INFO_MOCK)));
      dispatch(requireAuthorization(AuthorizationStatus.AUTH));
    });

    const {container} = render(<Provider store={store}><Router history={history}><Header/></Router></Provider>);

    expect(container).toMatchSnapshot();
  });
});
