import {render} from '@testing-library/react';
import {createMemoryHistory} from 'history';
import React from 'react';
import {Provider} from 'react-redux';
import {Router} from 'react-router-dom';
import {createStore} from 'redux';
import reducer from '../../store/root-reducer';
import PageNotFound from './page-not-found';

const store = createStore(
    reducer,
);

test(`Should PageNotFoundScreen render correctly`, () => {
  const history = createMemoryHistory();
  const {container} = render(
      <Provider store={store}>
        <Router history={history}>
          <PageNotFound/>
        </Router>
      </Provider>,
  );
  expect(container).toMatchSnapshot();
});
