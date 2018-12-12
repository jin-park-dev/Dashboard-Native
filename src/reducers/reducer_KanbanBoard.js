import initialState from './initialState'
import * as types from '../actions/actionTypes'


export default function(state = initialState.kanbanBoard, action) {
  switch(action.type) {
    case types.FETCH_KANBANBOARD_COLUMNS_SUCCESS:

      let kanbanBoardAll = action.payload.data
      // console.log("kanbanBoardAll")
      // console.log(kanbanBoardAll)
      // console.log(kanbanBoardAll[0])

      kanbanBoardAll.forEach((cur, index, array) => {
        // console.log(cur)
        // console.log(index)
        // console.log(array)

        let columns = cur.columns
        // console.log("columns")
        // console.log(columns)

        // // Convert array to json (api server gives list of jsons)
        // // Due to conflict of column and task IDS (they do conflict if they're same), making it unique here

        let columnsJSON = {}

        for (let key of columns) {
          key.id = "column-" + key.id
          columnsJSON[key.id] = key
        }

        // columns.forEach((cur2) => {
        //   // console.log("cur2")
        //   // console.log(cur2)
        //   cur2.id = "column-" + cur2.id
        // })

        console.log("columnsJSON")
        console.log(columnsJSON)

        cur['columns'] = columnsJSON
      })

      // console.log("kanbanBoardAll FINAL")
      // console.log(kanbanBoardAll)

      return {
        ...state,
        kanbanBoardAll: kanbanBoardAll,
        loading: {
          ...state.loading,
          columns: false,
        }
      }

    case types.FETCH_KANBANBOARD_TASKS_SUCCESS:
      // console.log("FETCH_KANBANBOARD_TASKS_SUCCESS - state")

      let kanbanboardId = action.kanbanboardId

      let tasks = {}
      let tasks_payload_data = action.payload.data
      // Convert array to json (api server gives list of jsons)
      // Due to conflict of column and task IDS (they do conflict if they're same), making it unique here
      for (let key of tasks_payload_data) {
        tasks[key.id] = key
      }

      // let kanbanBoardAll2 = newState.kanbanBoardAll
      // Loop through KanbanBoardAll
      let kanbanBoardAll2 = state.kanbanBoardAll.map((curBoard, i, array) => {
        // console.log(curBoard.id)
        // console.log(kanbanboardId)
        if(curBoard.id === kanbanboardId) {
          // console.log(curBoard)
          curBoard = {
            ...curBoard,
            tasks: tasks,
            // loading: {
            //   ...curBoard.loading,
            //   tasks: false,
            // }
          }
          return curBoard
        }
        return curBoard
      })

      return {
        ...state,
        kanbanBoardAll: kanbanBoardAll2,
        loading: {
          ...state.loading,
        }
      }

    case types.FETCH_KANBANBOARD_ORDER_SUCCESS:
      // console.log("FETCH_KANBANBOARD_ORDER_SUCCESS")
      let columnOrder = action.payload.data

      let kanbanboardId3 = action.kanbanboardId

      let kanbanBoardAll3 = state.kanbanBoardAll.map((curBoard, i, array) => {
        // console.log(curBoard.id)
        // console.log(kanbanboardId)
        if(curBoard.id === kanbanboardId3) {
          // console.log(curBoard)
          curBoard = {
            ...curBoard,
            columnOrder: columnOrder,
            // loading: {
            //   ...curBoard.loading,
            //   tasks: false,
            // }
          }
          return curBoard
        }
        return curBoard
      })
      return {
        ...state,
        kanbanBoardAll: kanbanBoardAll3,
        loading: {
          ...state.loading,
          // columnOrder: false,
        }
      }

    case types.UPDATE_KANBANBOARD_STATE:
      // console.log("action.payload")
      // console.log(action.payload)

      return {
        ...state,
        kanbanBoardAll: action.payload,
        // loading: {
        //   ...state.loading,
        //   // columnOrder: false,
        // }
      }

    case types.UPDATE_KANBANBOARD_COLUMN_ORDER_SUCCESS:
      // console.log('reducer - UPDATE_KANBANBOARD_COLUMN_ORDER_SUCCESS: updated at api-end point')
      return state

    case types.CREATE_KANBANBOARD_TASK:
      // console.log("types.CREATE_KANBANBOARD_TASK - Prob should add this to correct column from front-end side. (Or reload?)")
      // console.log(action)
      return {
        ...state,
      }

    case types.UPDATE_KANBANBOARD_TASK:
      return {
        ...state,
      }

    case types.LOADING_KANBANBOARD_TASKS:
      // console.log('reducer: types.LOADING_KANBANBOARD_TASKS')
      // console.log(action.payload)
      let tasksLoading = action.payload
      return {
        ...state,
        loading: {
          ...state.loading,
          tasks: tasksLoading,
        }
      }

    case types.LOADING_KANBANBOARD_COLUMNS:
      // console.log('reducer: types.LOADING_KANBANBOARD_COLUMNS')
      // let loading = action.payload.data...state.loading,
      return {
        ...state,
        loading: {
          ...state.loading,
          columns: action.payload,
        }
      }

    case types.LOADING_KANBANBOARD_COLUMNORDER:
      // let loading = action.payload.data...state.loading,
      return {
        ...state,
        loading: {
          ...state.loading,
          columnOrder: action.payload,
        }
      }

    default: return state
  }
}
