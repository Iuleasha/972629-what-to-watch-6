import {combineReducers} from 'redux';
import {commentsData} from './comments-data/comments-data';
import {filmsData} from './films-data/films-data';
import {user} from './user/user';

export const NameSpace = {
  DATA: `DATA`,
  COMMENTS: `COMMENTS`,
  USER: `USER`,
};

export default combineReducers({
  [NameSpace.DATA]: filmsData,
  [NameSpace.COMMENTS]: commentsData,
  [NameSpace.USER]: user,
});
