import initialState from './initialState'
import * as types from '../actions/actionTypes'


export default function(state = initialState.task, action) {
  switch(action.type) {
    case types.FETCH_TASKS_LIST_SUCCESS:
      // This needs to take array of objects
      // console.log("case: types.FETCH_TASKS_LIST_SUCCESS")
      return {
        ...state,
        tasks: action.payload.data,
        loading: {
          ...state.loading,
          tasks: false,
        }
      }

    case types.REMOVE_TASKS_LIST_SUCCESS:
      // This needs to take array of objects
      // console.log("case: types.REMOVE_TASKS_LIST_SUCCESS")
      return {
        ...state,
        // tasks: action.payload.data,
        loading: {
          ...state.loading,
          tasks: false,
        }
      }

    case types.UPDATE_TASK_COLUMN_SUCCESS:
      // console.log("case: types.UPDATE_TASK_COLUMN_SUCCESS")
      return state

    case types.LOADING_TASKLIST_TASKS:
      // console.log('reducer: types.LOADING_TASKLIST_TASKS')
      // let loading = action.payload.data
      return {
        ...state,
        loading: {
          ...state.loading,
          tasks: true,
        }
      }

    default: return state
  }
}