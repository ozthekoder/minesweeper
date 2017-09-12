import * as types from '../constants/action-types';

// example of a thunk using the redux-thunk middleware
export function updateBoard(payload) {
  return function (dispatch) {
    // thunks allow for pre-processing actions, calling apis, and dispatching multiple actions
    // in this case at this point we could call a service that would persist the fuel savings
    return dispatch({
      type: types.UPDATE_BOARD,
      payload
    });
  };
}

export function updateGameState(payload) {
  return {
    type: types.CALCULATE_FUEL_SAVINGS,
    payload
  };
}
