import boardReducer from './board-reducer';
import { combineReducers } from 'redux';
 export default combineReducers({
  board: boardReducer
 });
