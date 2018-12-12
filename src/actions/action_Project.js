import axios from "axios"
import * as types from "./actionTypes"
import { BASEURL } from './url_consts'

export function fetchProjectList() {
  return function(dispatch) {
    return axios.get(`${BASEURL}/api/projects`)
      .then((response) => {
          dispatch({
            type: types.FETCH_PROJECT_LIST_SUCCESS,
            payload: response,
          })
        }
      ).catch(error => {
        // console.log('error: fetchProjectList()')
        throw(error)
      });
  };
}
