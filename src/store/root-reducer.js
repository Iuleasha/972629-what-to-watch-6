import {combineReducers} from 'redux';
import {NameSpace} from '../constants/constant';
import {commentsData} from './comments-data/comments-data';
import {filmsData} from './films-data/films-data';
import {user} from './user/user';

export default combineReducers({
  [NameSpace.DATA]: filmsData,
  [NameSpace.COMMENTS]: commentsData,
  [NameSpace.USER]: user,
});
