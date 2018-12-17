import React, { Component } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { countdownTimerTick, countdownTimerStop, countdownTimerStart, countdownTimerFinished, countdownTimerReset } from "../../actions/action_CountdownTimer"
import { createRecordAndRefreshPomoCount } from "../../actions/action_Record";


import BlinkView from 'react-native-blink-view'
import moment from "moment";

// const PomodoroClock = ({ onPress }) => {
//   const { buttonStyle, textStyle } = styles;
//
//   return (
//     <TouchableOpacity onPress={onPress} style={buttonStyle}>
//       <Text style={textStyle}>
//         25 : 00
//       </Text>
//     </TouchableOpacity>
//   )
// };
//
// export  { PomodoroClock };
//
const circleSize = 250;

const styles = {
  textStyle: {
    // alignSelf: 'center',
    // justifyContent: 'center',
    color: '#2C2727',
    fontSize: 40,
    // fontWeight: '200',
    // paddingTop: 10,
    // paddingBottom: 10,
  },
  buttonStyle: {
    backgroundColor: '#716F77',

    justifyContent: 'center',
    alignItems: 'center',

    width: circleSize,
    height: circleSize,
    borderRadius: circleSize/2,

    borderWidth: 5,
    borderColor: '#E37979',
    // marginLeft: 5,
    // marginRight: 5,
    marginTop: 10,
  }
};


const intervalLength = 10; // in milliseconds

class PomodoroClock extends Component {

  constructor(props) {
    super(props);
    // this.state = {
    //   secondsRemaining : 0
    // }

    // this.tick = this.tick.bind(this);
    this.startTimer = this.startTimer.bind(this);
    // this.cancelTimer = this.cancelTimer.bind(this);
    this.onButtonPress = this.onButtonPress.bind(this);
    this.renderTime = this.renderTime.bind(this);
  }

  startTimer() {
    this.props.countdownTimerStart();
    this.timer = setInterval(this.tick.bind(this), intervalLength);
    // console.log("timer started")
  }

  tick() {
    this.props.countdownTimerTick();
    // console.log(this.props.countdownTimer);

    if (this.props.countdownTimer.seconds <= 0) {
      // console.log("this below 0 now finished!")
      clearInterval(this.timer);
      this.props.countdownTimerFinished();
    }
  }

  uploadPomodoro() {
    const { start_time, end_time } = this.props.countdownTimer;
    const current_task = this.props.tasks.filter((task) => {

      if (parseInt(task.id)==parseInt(this.props.selectedTask)) {
        return task.name
      }
    });

    const task_name = current_task[0].name;

    console.log(current_task)
    console.log(task_name)

    let data = {
      start_time: start_time,
      end_time : moment(Date.now()).format("YYYY-MM-DD HH:mm:ss"),
      task: parseInt(this.props.selectedTask),
      task_name: task_name,
      type: "Pomodoro",
      // comment: state_data.comment,
    };
    console.log(data)

    this.props.createRecordAndRefreshPomoCount(data)
  }

  onButtonPress() {
    const { status } = this.props.countdownTimer;
    console.log("on_press()")
    console.log(this.props.selectedTask)
    console.log(this.props.tasks)

    if (status === 'ready') {
      this.startTimer()
    } else if (status === 'finished') {
      // Upload and reset timer
      this.props.countdownTimerReset();
      this.uploadPomodoro();

    }

  }

  // Adds 0 to start. Fixes time that looks like 25:0 instead of 25:00.
  pad(num) {
    return ("0"+num).slice(-2);
  }

  hhmmss(secs) {
    let minutes = Math.floor(secs / 60);
    secs = secs%60;
    let hours = Math.floor(minutes/60);
    minutes = minutes%60;
    return `${this.pad(minutes)}:${this.pad(secs.toFixed(0))}`;
    // return `${minutes}:${secs.toFixed(0)}`;
    // return `${hours}:${minutes}:${secs}`;
  }

  renderTime() {
    const { buttonStyle, textStyle } = styles;

    if (this.props.countdownTimer.status === 'finished') {
      return <BlinkView blinking={true} delay={300}><Text style={textStyle}>Upload</Text></BlinkView>
    }
    return <Text style={textStyle}>{this.hhmmss(this.props.countdownTimer.seconds)}</Text>
  }

  render() {
    const { buttonStyle, textStyle } = styles;

    return (
      <TouchableOpacity onPress={this.onButtonPress} style={buttonStyle}>
        {this.renderTime()}
      </TouchableOpacity>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {
    // fetchPomodoroCount: (start, finish) => dispatch(fetchPomodoroCount(start, finish)),
    countdownTimerTick: () => dispatch(countdownTimerTick()),
    countdownTimerStop: () => dispatch(countdownTimerStop()),
    countdownTimerStart: () => dispatch(countdownTimerStart()),
    countdownTimerFinished: () => dispatch(countdownTimerFinished()),
    countdownTimerReset: () => dispatch(countdownTimerReset()),
    createRecordAndRefreshPomoCount: (data) => dispatch(createRecordAndRefreshPomoCount(data)),
  };
}

function mapStateToProps(state) {
  return {
    countdownTimer: state.countdownTimer,
    selectedTask: state.pomodoroPickerForm.selectedTask,
    tasks: state.taskList.tasks,
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(PomodoroClock);