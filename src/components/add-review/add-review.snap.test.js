import {render} from '@testing-library/react';
import {createMemoryHistory} from 'history';
import React from 'react';
import {Provider} from 'react-redux';
import {Router} from 'react-router-dom';
import {createStore} from 'redux';
import {filmAdapter} from '../../adapters/films';
import {FILM_MOCK} from '../../constants/mock';
import reducer from '../../store/root-reducer';
import {AddReview} from './add-review';

const MOCK_FILM = filmAdapter(FILM_MOCK);
const store = createStore(reducer);
test(`Should AddReview render correctly`, () => {
  const history = createMemoryHistory();

  jest.mock(`react-router-dom`, () => ({
    ...jest.requireActual(`react-router-dom`),
    useParams: () => ({
      id: 2,
    }),
  }));
  const {container} = render(
      <Provider store={store}>
        <Router history={history} path="/films/:id/review">
          <AddReview films={[MOCK_FILM]}/>
        </Router>
      </Provider>,
  );

  expect(container).toMatchSnapshot();
});
