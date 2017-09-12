import {UPDATE_BOARD} from '../constants/action-types';
import objectAssign from 'object-assign';
import initialState from './initial-state';

export default function boardReducer(state = initialState.board, action) {
  let newState;

  switch (action.type) {
    case UPDATE_BOARD:
      newState = objectAssign({}, state);
      return newState;
    default:
      return state;
  }
}
