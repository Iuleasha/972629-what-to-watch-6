import {createReducer} from '@reduxjs/toolkit';
import {addReview} from '../action';

const initialState = {comments: {}};

const commentsData = createReducer(initialState, (builder) => {
  builder.addCase(addReview, (state, action) => {
    const {comments} = state;
    state.comments = {...comments, [action.payload.id]: action.payload.comments};
  });
});

export {commentsData};
