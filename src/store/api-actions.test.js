import MockAdapter from 'axios-mock-adapter';
import {filmsAdapter} from '../adapters/films';
import {APIRoute} from '../constants/constant';
import {FILM_MOCK} from '../constants/mock';
import {createAPI} from '../services/api';
import {ActionType} from './action';
import {fetchFilmsList} from './api-actions';

const api = createAPI(() => {
});

describe(`Async operation work correctly`, () => {
  it(`Should make a correct API call to /films`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const questionLoader = fetchFilmsList();

    apiMock
      .onGet(APIRoute.FILMS)
      .reply(200, [FILM_MOCK]);

    return questionLoader(dispatch, () => {
    }, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_SUCCESS,
          payload: filmsAdapter([FILM_MOCK]),
        });
      });
  });
});
