import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Picker, Dimensions} from 'react-native';
import {PomodoroClock} from "./pomodoro";
import PickerViewExample from "antd-mobile-rn/lib/picker-view/demo/basic.native";
import {CardSection} from "./common";
import PomodoroPicker from "./pomodoro/PomodoroPicker";
import PomodoroCounter from "./pomodoro/PomodoroCounter";
import PomodoroCounterText from "./pomodoro/PomodoroCounterText";

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

class PomodoroContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    // var {height, width} = Dimensions.get('window');

    const { containerStyle, pomoClockStyle } = styles;
    return (
      <View style={containerStyle}>
        {/*<Text>*/}
        {/*/!*{Dimensions.get('window').height}*!/*/}
        {/*/!*{Dimensions.get('window').width}*!/*/}
        {/*{height} /*/}
        {/*{width}*/}
        {/*</Text>*/}
        <View style={pomoClockStyle}>
          <PomodoroClock />
        </View>

        <PomodoroPicker />

        <PomodoroCounter />

        <PomodoroCounterText />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerStyle: {
    flex: 3,
    justifyContent: 'space-around',
    // alignItems: 'center',
    backgroundColor: '#716F77',
  },
  pomoClockStyle: {
    alignItems: 'center',
    justifyContent: 'center',
  }
});

export default PomodoroContainer;