
import {configureStore} from '@reduxjs/toolkit';
import {createMemoryHistory} from 'history';
import React from 'react';
import {render} from '@testing-library/react';
import {Provider} from 'react-redux';
import {Router} from 'react-router-dom';
import reducer from '../../store/root-reducer';
import MyListButton from './my-list-button';

const store = configureStore({reducer});

describe(`Test MyListButton`, () => {
  const history = createMemoryHistory();

  test(`Should render correctly if isFavorite false`, () => {
    const {container} = render(
        <Provider store={store}>
          <Router history={history}>
            <MyListButton isFavorite={false} id={1}/>
          </Router>
        </Provider>);
    expect(container).toMatchSnapshot();
  });

  test(`Should render correctly if isFavorite true`, () => {
    const {container} = render(
        <Provider store={store}>
          <Router history={history}>
            <MyListButton isFavorite={true} id={1}/>
          </Router>
        </Provider>);
    expect(container).toMatchSnapshot();
  });
});
