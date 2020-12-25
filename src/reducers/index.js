import {combineReducers} from 'redux';
import ActiveArticle from './reducer.js';
import ActiveSource from './reducer.js';
import History from './historyreducer';

const allReducers= combineReducers({
  activeArticle: ActiveArticle,
  activeSource: ActiveSource,
  history: History

});
export default allReducers;