import React, { Component } from 'react';
import {FlatList, Picker, View, Text} from 'react-native';
import { connect } from 'react-redux';
import moment from "moment";
import {CardSection, Spinner} from "../common";
import { fetchPomodoroCount } from "../../actions/action_Pomodoro";


class PomodoroCounterText extends Component {
  // renderItem(library) {
  //   return <ListItem library={library}/>
  // }
  componentWillMount() {
    this.handlePomodoroCount()
  }

  handlePomodoroCount() {
    // Take it from UI, this is temp
    let start = moment().format('YYYY-MM-DD')
    let finish = moment().add(1,'d').format('YYYY-MM-DD')
    this.props.fetchPomodoroCount(start, finish)
  }

  render() {

    const { pomoCountTextStyle } = styles;

    return (
      <View style={pomoCountTextStyle}>
        { this.props.pomodoroLoading ? <Spinner size='small' /> : <Text>{this.props.pomodoro}</Text> }
      </View>
    )
  }
}

const styles = {
  pomoCountTextStyle: {
    alignItems: 'center',
    // justifyContent: 'center',
  }
};

function mapDispatchToProps(dispatch) {
  return {
    fetchPomodoroCount: (start, finish) => dispatch(fetchPomodoroCount(start, finish)),
  };
}

function mapStateToProps(state) {
  return {
    pomodoro: state.stats.pomodoro,
    pomodoroLoading: state.stats.loading.pomodoro,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(PomodoroCounterText);