import initialState from './initialState'
import * as types from '../actions/actionTypes'


export default function(state = initialState.countdownTimer, action) {
  switch(action.type) {
    case 'START_TIMER' :
      return Object.assign(
        {},
        state,
        {
          start_time : action.start_time,
          seconds : action.start_time,
          status : 'counting down'
        }
      );
    case 'STOP_TIMER' :
      return Object.assign(
        {},
        state,
        { status: 'paused' }
      );
    case 'TICK' :
      return Object.assign(
        {},
        state,
        { seconds: (state.seconds - .01).toFixed(2) }
      );
    default :
      return state;
  }
}