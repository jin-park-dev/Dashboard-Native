import React, { Component } from 'react';
import {FlatList, Picker, View, Text} from 'react-native';
import { connect } from 'react-redux';
import {CardSection} from "../common";

class PomodoroCounterText extends Component {
  // renderItem(library) {
  //   return <ListItem library={library}/>
  // }

  render() {

    const { pomoCountTextStyle } = styles;

    return (
      <View style={pomoCountTextStyle}>
        <Text>12</Text>
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

// const mapStateToProps = state => {
//   return { libraries: state.libraries };
// };

export default connect(null)(PomodoroCounterText);