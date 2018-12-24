import { combineReducers } from "redux";
import KanbanBoardReducer from "./reducer_KanbanBoard";
import TaskListReducer from "./reducer_TaskList";
import ProjectReducer from "./reducer_Project";
import RecordReducer from "./reducer_Record";
import StatsReducer from "./reducer_Stats";
import PomodoroPickerFormReducer from "./reducer_PomodoroPickerForm";
import CountdownTimerReducer from "./reducer_CountdownTimer";
import AuthReducer from "./reducer_Auth";

const rootReducer = combineReducers({
  kanbanBoard: KanbanBoardReducer,
  taskList: TaskListReducer,
  project: ProjectReducer,
  record: RecordReducer,
  stats: StatsReducer,
  pomodoroPickerForm: PomodoroPickerFormReducer,
  countdownTimer: CountdownTimerReducer,
  auth: AuthReducer,
});

export default rootReducer;