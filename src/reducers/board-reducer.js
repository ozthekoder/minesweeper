import {
  START_NEW_GAME,
  REVEAL_BLOCK,
  FLAG_BLOCK,
  GAME_LOST,
  GAME_WON
} from '../constants/action-types';
import objectAssign from 'object-assign';
import initialState from './initial-state';
import Board from '../objects/board'
let board = new Board();

export default function boardReducer(state = initialState.board, action) {
  let newState;
  const { payload } = action;

  switch (action.type) {
    case START_NEW_GAME:
      board = new Board();
      board.spots.forEach((spot, i) => {
        spot.numOfMines = board.mineCount(i);
      });
      return board.getGameState();
      break;
    case REVEAL_BLOCK:
      board.clearSpot(payload);
      newState = { ...board.getGameState() };
      return { ...board.getGameState() };
      break;
    case FLAG_BLOCK:
      newState = objectAssign({}, state);
      return newState;
      break;
    case GAME_LOST:
      newState = objectAssign({}, state);
      return newState;
      break;
    case GAME_WON:
      newState = objectAssign({}, state);
      return newState;
      break;

    default:
      return state;
  }
};
