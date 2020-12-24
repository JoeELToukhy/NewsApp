import {combineReducers} from 'redux';
import ActiveArticle from './reducer.js';
import ActiveSource from './reducer.js';

const allReducers= combineReducers({
  activeArticle: ActiveArticle,
  activeSource: ActiveSource

});
export default allReducers;