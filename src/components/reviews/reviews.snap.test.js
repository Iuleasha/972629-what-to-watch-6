import {configureStore} from '@reduxjs/toolkit';
import {render} from '@testing-library/react';
import {createMemoryHistory} from 'history';
import React from 'react';
import {Provider} from 'react-redux';
import {Router} from 'react-router-dom';
import {COMMENT_MOCK} from '../../constants/mock';
import {addReview} from '../../store/action';
import reducer from '../../store/root-reducer';
import Reviews from './reviews';

const store = configureStore({reducer});

store.dispatch((dispatch) => dispatch(addReview({id: `1`, comments: [COMMENT_MOCK]})));

test(`Should Reviews render correctly`, () => {
  const history = createMemoryHistory();

  const {container} = render(
      <Provider store={store}>
        <Router history={history}>
          <Reviews filmId={`1`}/>
        </Router>
      </Provider>,
  );
  expect(container).toMatchSnapshot();
});
