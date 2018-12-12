import axios from "axios"
import * as types from "./actionTypes"
import { BASEURL } from './url_consts'


export function fetchTasksList() {
  return function(dispatch) {
    return axios.get(`${BASEURL}/api/tasks`)
      .then((response) => {
          dispatch({
            type: types.FETCH_TASKS_LIST_SUCCESS,
            payload: response,
          })
        }
      ).catch(error => {
        // console.log("Error: fetchTasksList()")
        // message.error('Action: fetchTasksList error. Please refresh')
        throw(error)
      });
  };
}

export function updateTaskColumn(taskId, columnId, columnStartId, order) {
  // console.log("updateTaskColumn(taskId, columnId, order)")
  // console.log(`taskId: ${taskId}. columnId: ${columnId}. columnStartId: ${columnStartId}. order: ${order}`)
  const data = {
    type: types.UPDATE_TASK_COLUMN_SUCCESS,
    taskId: taskId,
    columnId: columnId,
    columnStartId: columnStartId,
    orderNumber: order,
  }
  // console.log("Data we're sending is below \\/")
  // console.log(data)
  return function(dispatch) {
    // console.log('01')
    return axios.patch(`${BASEURL}/api/tasks/${taskId}`, data)
      .then((response) => {
          // console.log('02')
          dispatch({
            type: types.UPDATE_TASK_COLUMN_SUCCESS,
            payload: response,
          })
        }
      ).catch(error => {
        // console.log("Error: updateTaskOrder(taskId, columnId, order)")
        throw(error)
      });
  };
}


export function removeATasksList(id) {
  // console.log("removeATasksList(id)")
  // console.log(id)
  const data = {
    id: id,
    type: types.REMOVE_TASKS_LIST_SUCCESS,
  }
  return function(dispatch) {
    // console.log('01')
    return axios.delete(`${BASEURL}/api/tasks/${id}`, data)
      .then((response) => {
        // console.log('02')
        dispatch({
            type: types.REMOVE_TASKS_LIST_SUCCESS,
            payload: response,
          })
        }
      ).catch(error => {
        // console.log("Error: removeATasksList()")
        throw(error)
      });
  };
}


export function updateTaskOrder(taskId, columnId, order) {
  // console.log("updateTaskOrder(taskId, columnId, order)")
  // console.log(`taskId: ${taskId}. columnId: ${columnId}. order: ${order}`)
  const data = {
    type: types.UPDATE_TASK_COLUMN_ORDER_SUCCESS,
    taskId: taskId,
    columnId: columnId,
    orderNumber: order,
  }
  // console.log("Data we're sending is below \\/")
  // console.log(data)
  return function(dispatch) {
    // console.log('01')
    return axios.patch(`${BASEURL}/api/tasks/${taskId}`, data)
      .then((response) => {
        // console.log('02')
        dispatch({
            type: types.UPDATE_TASK_COLUMN_ORDER_SUCCESS,
            payload: response,
          })
        }
      ).catch(error => {
        // console.log("Error: updateTaskOrder(taskId, columnId, order)")
        throw(error)
      });
  };
}


export function loadingTaskListTasks() {
  // console.log("action: loadingTaskListTasks")
  return {
    type: types.LOADING_TASKLIST_TASKS,
    payload: true,
  }
}
