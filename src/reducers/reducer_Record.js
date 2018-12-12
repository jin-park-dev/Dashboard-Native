import initialState from './initialState'
import * as types from '../actions/actionTypes'


export default function(state = initialState.record, action) {
  switch(action.type) {
    case types.FETCH_RECORD_LIST_SUCCESS:
      // console.log("case: types.FETCH_RECORD_LIST_SUCCESS")
      return {
        ...state,
        records: action.payload.data,
        loading: {
          ...state.loading,
          record: false,
        }
      }
    case types.CREATE_RECORD_SUCCESS:
      return state
    default: return state
  }
}