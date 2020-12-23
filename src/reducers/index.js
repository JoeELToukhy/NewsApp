import {combineReducers} from 'redux';
import ActiveArticle from './reducer.js';

const allReducers= combineReducers({
  activeArticle: ActiveArticle
});
export default allReducers;