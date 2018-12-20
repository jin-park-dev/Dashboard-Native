import React, { Component } from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {connect} from "react-redux";
import { Actions } from 'react-native-router-flux';
import {Button, Card, CardSection} from "./components/common";

import { auth } from "./actions";

// const RouterDrawerComponent = () => {
//   return (
//     <Text>Drawer item here.</Text>
//   )
// };

class RouterDrawerComponent extends Component {

  onPressLogout() {
    this.props.logout()
  }

  render() {
    return(
      <View style={styles.containerStyle}>
        <Text>Drawer item here.</Text>
        <Button style={styles.buttonStyle} onPress={Actions.login}>Login</Button>
        <Button style={styles.buttonStyle} onPress={Actions.pomodoro}>Pomodoro</Button>
        <Button style={styles.buttonStyle} onPress={this.onPressLogout.bind(this)}>Logout</Button>
      </View>
    )
  }
}

const styles = {
  containerStyle: {
    flex: 5,
    justifyContent: 'flex-start',
    // alignItems: 'center',
    backgroundColor: '#716F77',
  },
  // buttonStyle: {
  //   alignItems: 'center',
  //   justifyContent: 'center',
  //   height: 55,
  // },
  buttonStyle: {
    // flexDirection: 'row',
    // marginLeft: 20,
    // marginRight: 20,
    flex: 0,
    alignSelf: 'stretch',
    marginBottom: 2,
    borderRadius: 15,
    backgroundColor: '#E37979',
    borderColor: '#E37979',
  },
};

const mapStateToProps = state => {
    return {

    }
}

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(auth.logout()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RouterDrawerComponent);
