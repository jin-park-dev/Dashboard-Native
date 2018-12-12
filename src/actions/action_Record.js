import axios from "axios"
import * as types from "./actionTypes"
// import {fetchTasksList} from "./action_Task";
// import {fetchKanbanBoardColumns, fetchKanbanBoardTasks} from "./action_KanbanBoard";
import {fetchPomodoroCount} from "./action_Pomodoro";
import moment from "moment";
import { BASEURL } from './url_consts'


export function fetchRecordList(start, end) {
  // Different cases to match backend
  let config

  if (start && end) {
    // console.log('There is start or end')
    config = {
      // params: {
      //   start: start,
      //   end: end,
      // }
      params: {
        start: start,
        end: end,
      }
    }
  // } else if (start) {
  //   console.log('There is start only')
  //   config = {
  //     params: {
  //       start: start,
  //     }
  //   }
  } else {
    config = {}
  }
  return function(dispatch) {
    return axios.get(`${BASEURL}/api/records`, config)
      .then((response) => {
        // console.log(response)
          dispatch({
            type: types.FETCH_RECORD_LIST_SUCCESS,
            payload: response,
          })
        }
      ).catch(error => {
        // console.log('error: fetchRecordList()')
        throw(error)
      });
  };
}

export function createRecord(data) {
  // console.log('action - createRecord: pre axios - 01')
  // console.log(data)
  return function(dispatch) {
    return axios.post(`${BASEURL}/api/records/`, data)
      .then((response) => {
        // console.log('action - createRecord: after axios response - 02')
        dispatch({
            type: types.CREATE_RECORD_SUCCESS,
            payload: response,
          })
        }
      )
      .catch(error => {
        // console.log('error: createRecord(data)')
        throw(error)
      });
  };
}


export function createRecordAndRefreshPomoCount(dataForOnCreateRecord) {
  return (dispatch) => {
    dispatch(createRecord(dataForOnCreateRecord)).then((dataAfterOnCreateRecord) => {
      dispatch(fetchPomodoroCount(moment().format('YYYY-MM-DD'), moment().add(1,'d').format('YYYY-MM-DD'))
      );
    })
  };
}
