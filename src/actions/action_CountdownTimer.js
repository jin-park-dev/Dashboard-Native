import * as types from "./actionTypes"

export const countdownTimerTick = () => {
  return {
    type: types.TICK,
  };
};

export const countdownTimerStop = () => {
  return {
    type: types.STOP_TIMER,
  };
};

export const countdownTimerStart = () => {
  return {
    type: types.START_TIMER,
    payload: 1500,
  };
};
