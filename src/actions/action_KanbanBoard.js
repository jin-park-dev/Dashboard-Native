import axios from "axios"
import * as types from './actionTypes'
import { BASEURL } from './url_consts'
import { fetchTasksList } from './action_Task'



/*
Kanban board is made up of

  kanbanBoard: {
    tasks: {},
    columns: {},
    columnOrder: [],

  tasks = list of tasks for the board.
  columns: {
    id:
    taskIds: [ Array of ids for task.]
    name:
  }

 */

export function fetchKanbanBoardColumns() {
  // console.log('fetchKanbanBoardColumns')
  return function(dispatch) {
    return axios.get(`${BASEURL}/api/kanbanboard/`)
      .then((response) => {
        // console.log(" fetchKanbanBoardColumns  -  response")
        // console.log(response)
          dispatch({
            type: types.FETCH_KANBANBOARD_COLUMNS_SUCCESS,
            payload: response,
          })
        }).then(() => {
        // TODO: Hard coded. Get some return here of IDs of boards. (or position in array)
        // console.log("Loading task: True")
        dispatch(loadingKanbanBoardTasks(true));
        dispatch(loadingKanbanBoardColumnOrder(true));
        dispatch(loadingKanbanBoardColumns(true));
        // console.log('Promise before')
        return new Promise((resolve, reject) => {
          // dispatch(fetchKanbanBoardTasks(1))

          //TODO: HARD CODED
          dispatch(fetchKanbanBoardTasks(2))
          resolve(dispatch(fetchKanbanBoardTasks(1)))

          dispatch(fetchKanbanBoardOrder(2))
          resolve(dispatch(fetchKanbanBoardOrder(1)))
          // console.log('Promise first')
        }).then(() => {
          // console.log('Promise first then-----')
          // console.log("Loading task: False")
          dispatch(loadingKanbanBoardTasks(false));
          dispatch(loadingKanbanBoardColumnOrder(false));
          dispatch(loadingKanbanBoardColumns(false));
        })
      }).catch(error => {
        throw(error)
      });
  };
}

// Hmmm, for 1 kanbanBoard? Reducer needs all board to keep in state.
// export function fetchKanbanBoardColumns(kanbanboardId) {
//   // console.log('fetchKanbanBoardColumns')
//   return function(dispatch) {
//     return axios.get(`http://localhost:8018/api/kanbanboard/${kanbanboardId}`)
//       .then((response) => {
//           dispatch({
//             type: types.FETCH_KANBANBOARD_COLUMNS_SUCCESS,
//             payload: response,
//           })
//         }
//       ).catch(error => {
//         message.error('Action: fetchKanbanBoardColumns error. Please refresh')
//         throw(error)
//       });
//   };
// }

export function fetchKanbanBoardTasks(kanbanboardId) {
  // console.log(`fetchKanbanBoardTasks called with kanbanboardId: ${kanbanboardId}`)
  return function(dispatch) {
    return axios.get(`${BASEURL}/api/kanbanboard/${kanbanboardId}/tasks`)
      .then((response) => {
          dispatch({
            type: types.FETCH_KANBANBOARD_TASKS_SUCCESS,
            payload: response,
            kanbanboardId: kanbanboardId,
          })
        }
      ).catch(error => {
        message.error('Action: fetchKanbanBoardTasks error. Please refresh')
        console.log('Action: fetchKanbanBoardTasks error. Please refresh')
        throw(error)
      });
  };
}

export function fetchKanbanBoardOrder(kanbanboardId) {
  return function(dispatch) {
    return axios.get(`${BASEURL}/api/kanbanboard/${kanbanboardId}/order`)
      .then((response) => {
          dispatch({
            type: types.FETCH_KANBANBOARD_ORDER_SUCCESS,
            payload: response,
            kanbanboardId: kanbanboardId,
          })
        }
      ).catch(error => {
        message.error('Action: fetchKanbanBoardOrder error. Please refresh')
        throw(error)
      });
  };
}

export function updateKanbanBoardColumnOrder(newOrder, kanbanBoardId) {

  // console.log('updateKanbanBoardColumnOrder')
  // console.log(newOrder)

  newOrder = newOrder.map((elem) => elem.replace('column-', ''))
  let data = {
    newOrder: newOrder
  }

  // console.log('removed column-')
  // console.log(data)

  return function(dispatch) {
    return axios.patch(`${BASEURL}/api/kanbanboard/${kanbanBoardId}/order`, data)
      .then((response) => {
          dispatch({
            type: types.UPDATE_KANBANBOARD_COLUMN_ORDER_SUCCESS,
            payload: response,
          })
        }
      ).catch(error => {
        message.error('Action: updateKanbanBoardColumnOrder error. Please refresh')
        throw(error)
      });
  };
}

// export function updateKanbanBoard(kanbanState) {
//   return function(dispatch) {
//     dispatch({
//       type: types.UPDATE_KANBANBOARD_STATE,
//       payload: kanbanState,
//     })
//   }
// }
//

// TODO: this currenly is only for local state. DOES NOT CHANGE BACKEND DATA
export function updateKanbanBoard(kanbanState) {
  // console.log("action - updateKanbanBoard - kanbanState below")
  // console.log(kanbanState)
  return {
      type: types.UPDATE_KANBANBOARD_STATE,
      payload: kanbanState,
    }
}


export function createKanbanBoardTask(data, kanbanboardId) {
  // console.log("createKanbanBoardTask(data)")
  // console.log(data)
  return function(dispatch) {
    // console.log('action - createKanbanBoardTask: pre axios - 01')
    return axios.post(`${BASEURL}/api/kanbanboard/column/${data.column}/tasks`, data)
      .then((response) => {
        // console.log('action - createKanbanBoardTask: after axios response - 02')
        dispatch({
          type: types.CREATE_KANBANBOARD_TASK,
          payload: response,
        })
      }).then(() => {
        // TODO: Not fully happy with this. Maybe I don't need to always reload kanban after creating a task.
        // TODO: Or this function only is for 1 thing.
        // TODO: Couldn't figure out how callback thing would work with just call...
        // console.log('action - createKanbanBoardTask: after after axios response - 03 - fetchKanbanBoardColumns()')
        dispatch(fetchKanbanBoardColumns())
        dispatch(fetchKanbanBoardTasks(kanbanboardId))
        dispatch(fetchTasksList())
      })
      .catch(error => {
        message.error('Action: createKanbanBoardTask error. Please refresh')
        throw(error)
      });
  }
}

export function updateKanbanBoardTask(data, kanbanboardId) {
  // console.log("updateKanbanBoardTask(data)")
  // console.log(data)
  // console.log(kanbanboardId)
  return function(dispatch) {
    // console.log('action - createKanbanBoardTask: pre axios - 01')
    return axios.put(`${BASEURL}/api/tasks/${data.id}`, data)
      .then((response) => {
        // console.log('action - createKanbanBoardTask: after axios response - 02')
        dispatch({
          type: types.UPDATE_KANBANBOARD_TASK,
          payload: response,
        })
      }).then(() => {
        // TODO: Hard coded. Get some return here of IDs of boards. (or position in array)
        // console.log("Loading task: True")

        // dispatch(loadingKanbanBoardTasks(true));

        dispatch(loadingKanbanBoardTasks(true));
        dispatch(loadingKanbanBoardColumnOrder(true));
        dispatch(loadingKanbanBoardColumns(true));

        return new Promise((resolve, reject) => {
          // dispatch(fetchTasksList())

          // dispatch(fetchKanbanBoardColumns());
          // resolve(dispatch(fetchKanbanBoardTasks(kanbanboardId)))
          
          //TODO: HARD CODED

          dispatch(fetchKanbanBoardTasks(2))
          resolve(dispatch(fetchKanbanBoardTasks(1)))

          dispatch(fetchKanbanBoardOrder(2))
          resolve(dispatch(fetchKanbanBoardOrder(1)))


        }).then(() => {
          // console.log("Loading task: False")

          dispatch(loadingKanbanBoardTasks(false));
          dispatch(loadingKanbanBoardColumnOrder(false));
          dispatch(loadingKanbanBoardColumns(false));
        })
      })
      .catch(error => {
        message.error('Action: updateKanbanBoardTask error. Please refresh')
        throw(error)
      });
  }
}

export function loadingKanbanBoardTasks(payload=true) {
  console.log("action: loadingKanbanBoardTasks")
  return {
    type: types.LOADING_KANBANBOARD_TASKS,
    payload: payload,
  }
}


export function loadingKanbanBoardColumns(payload=true) {
  // console.log("action: loadingKanbanBoardColumns")
  return {
    type: types.LOADING_KANBANBOARD_COLUMNS,
    payload: payload,
  }
}

export function loadingKanbanBoardColumnOrder(payload=true) {
  return {
    type: types.LOADING_KANBANBOARD_COLUMNORDER,
    payload: payload,
  }
}

