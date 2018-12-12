import axios from "axios"
import * as types from "./actionTypes"
import { BASEURL } from './url_consts'


export function fetchPomodoroCount(start, finish) {
  // console.log("fetchPomodoro(start, finish): Fetching pomodoro count based on ")
  // console.log(`start: ${start}. finish: ${finish}`)
  // console.log(start)


  // Different cases to match backend
  let config

  if (start && finish) {
    // console.log('There is start or finish')
    config = {
      params: {
        start: start,
        finish: finish,
      }
    }
  } else if (start) {
    console.log('There is start only')
    config = {
      params: {
        start: start,
      }
    }
  } else {
    config = {}
  }

  return function(dispatch) {
    return axios.get(`${BASEURL}/api/pomodoro`, config)
      .then((response) => {
          dispatch({
            type: types.FETCH_POMODORO_SUCCESS,
            payload: response,
          })
        }
      ).catch(error => {
        console.log("Error: fetchPomodoro()")
        throw(error)
      });
  };
}