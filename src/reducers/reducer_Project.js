import initialState from './initialState'
import * as types from '../actions/actionTypes'


export default function(state = initialState.project, action) {
  switch(action.type) {
    case types.FETCH_PROJECT_LIST_SUCCESS:
      // console.log("FETCH_PROJECT_LIST_SUCCESS")
      // console.log(action.payload.data)
      return {
        ...state,
        projects: action.payload.data,
        loading: {
          ...state.loading,
          project: false,
        }
      }
    default: return state
  }
}