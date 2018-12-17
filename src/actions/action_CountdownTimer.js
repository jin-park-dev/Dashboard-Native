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

export const countdownTimerFinished = () => {
  return {
    type: types.FINISHED_TIMER,
  };
};

export const countdownTimerReset= () => {
  return {
    type: types.RESET_TIMER,
  };
};

export const countdownTimerStart = () => {
  return {
    type: types.START_TIMER,
    payload: 2,
  };
};
