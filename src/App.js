import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';

import {fetchRecordList} from "./actions/action_Record";
import {fetchTasksList} from "./actions/action_Task";
import { fetchKanbanBoardTasks, fetchKanbanBoardColumns, fetchKanbanBoardOrder } from './actions/action_KanbanBoard';
import {fetchProjectList} from "./actions/action_Project";


class App extends Component {

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    store.dispatch(fetchTasksList());
    store.dispatch(fetchProjectList());
    store.dispatch(fetchKanbanBoardColumns());

    return (
      <Provider store={store}>
        <Router />
      </Provider>
    )
  }
}

export default App;