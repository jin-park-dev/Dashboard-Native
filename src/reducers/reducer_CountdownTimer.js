import initialState from './initialState'
import * as types from '../actions/actionTypes'
import moment from 'moment'

export default function(state = initialState.countdownTimer, action) {
  switch(action.type) {
    case types.START_TIMER :
      console.log(action)
      return Object.assign(
        {},
        state,
        {
          start_time : moment(Date.now()).format("YYYY-MM-DD HH:mm:ss"),
          seconds : action.payload,
          status : 'counting down'
        }
      );
    case types.STOP_TIMER:
      return Object.assign(
        {},
        state,
        {
          // seconds: 0,
          status: 'paused' }
      );
    case types.FINISHED_TIMER:
      return Object.assign(
        {},
        state,
        {
          seconds: 0,
          status: 'finished' }
      );
    case types.RESET_TIMER:
      return initialState.countdownTimer;
    case types.TICK:
      return Object.assign(
        {},
        state,
        { seconds: (state.seconds - .01).toFixed(2) }
      );
    default :
      return state;
  }
}