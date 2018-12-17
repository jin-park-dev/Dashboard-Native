export default {

  // kanbanBoard: {
  //   tasks: {},
  //   columns: {},
  //   columnOrder: [],

  kanbanBoard: {
    kanbanBoardAll: [],

    loading: {
      tasks: true,
      columns: true,
      columnOrder: true,
    }
  },

  task: {
    tasks: [],
    loading: {
      tasks: true,
    }
  },

  project: {
    projects: [],
    loading: {
      project: true,
    }
  },

  record: {
    records: [],
    loading: {
      record: true,
    }
  },

  stats: {
    pomodoro: '',
    loading: {
      pomodoro: true,
    },
  },

  pomodoroPickerForm: {
    tasks: [],
    selectedTask: '',
  },

  countdownTimer: {
    seconds: 0,
    start_time : 0,
    status: 'paused',
    decrement_interval: 0
  },

}

/*
// example data
let initialData = {
  tasks: {
    'task-1': {id: 'task-1', content: 'Take out the garbage' },
    'task-2': {id: 'task-2', content: 'Take hold of photo' },
    'task-3': {id: 'task-3', content: 'Social media project' },
    'task-4': {id: 'task-4', content: 'const initialData built in' },
  },
  columns: {
    'column-1': {
      id: 'column-1',
      title: 'To do',
      taskIds: ['task-1', 'task-2', 'task-3',],
    },
    'column-2': {
      id: 'column-2',
      title: 'In progress',
      taskIds: [],
    },
    'column-3': {
      id: 'column-3',
      title: 'Done',
      taskIds: ['task-4',],
    },
  },
  columnOrder: ['column-1', 'column-2', 'column-3', ],
}
*/