import {COMMENT_MOCK} from '../../constants/mock';
import {addReview} from '../action';
import {commentsData} from './comments-data';

describe(`CommentsReducer`, () => {
  it(`Reducer should add comments by id`, () => {
    const state = {comments: {}};

    expect(commentsData(state, addReview({
      id: `1`,
      comments: [COMMENT_MOCK, COMMENT_MOCK],
    }))).toEqual({comments: {'1': [COMMENT_MOCK, COMMENT_MOCK]}});
  });
});
