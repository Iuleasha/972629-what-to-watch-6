import {render} from '@testing-library/react';
import {createMemoryHistory} from 'history';
import React from 'react';
import {Provider} from 'react-redux';
import {Router} from 'react-router-dom';
import {createStore} from 'redux';
import reducer from '../../store/root-reducer';
import ReviewForm from './add-review-form';

const store = createStore(
    reducer,
);

test(`Should ReviewForm render correctly`, () => {
  const history = createMemoryHistory();
  const {container} = render(
      <Provider store={store}>
        <Router history={history}>
          <ReviewForm/>
        </Router>
      </Provider>,
  );
  expect(container).toMatchSnapshot();
});
