import * as types from '../constants/action-types';
export function startNewGame(payload) {
  return {
    type: types.START_NEW_GAME,
    payload
  };
}

export function revealBlock(payload) {
  return {
    type: types.REVEAL_BLOCK,
    payload
  };
}

export function flagBlock(payload) {
  return {
    type: types.FLAG_BLOCK,
    payload
  };
}

export function gameLost(payload) {
  return {
    type: types.GAME_LOST,
    payload
  };
}

export function gameWon(payload) {
  return {
    type: types.GAME_WON,
    payload
  };
}
