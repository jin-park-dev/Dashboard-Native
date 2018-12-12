import initialState from './initialState'
import * as types from '../actions/actionTypes'


export default function(state = initialState.pomodoroPickerForm, action) {
  switch(action.type) {
    case types.UPDATE_POMODOROPICKERFORM_PICKERITEM:
      // console.log("FETCH_PROJECT_LIST_SUCCESS")
      // console.log(action.payload)
      return { ...state, selectedTask: action.payload };
    default:
      return state
  }
}