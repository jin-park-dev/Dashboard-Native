import initialState from './initialState'
import * as types from '../actions/actionTypes'
import {fetchPomodoroCount} from "../actions/action_Pomodoro";
import moment from "moment";


export default function(state = initialState.stats, action) {
  switch(action.type) {
    case types.FETCH_POMODORO_SUCCESS:
      // console.log(action.payload.data)
      let pomodoro = action.payload.data.pomodoro
      fetchPomodoroCount(moment().format('YYYY-MM-DD'), moment().add(1,'d').format('YYYY-MM-DD'))
      return {
        ...state,
        pomodoro: pomodoro,
        loading: {
          ...state.loading,
          pomodoro: false,
        }
      }
    default: return state
  }
}