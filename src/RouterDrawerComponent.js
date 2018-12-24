import React, { Component, Fragment } from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {connect} from "react-redux";
import { Actions } from 'react-native-router-flux';
import {Button, Card, CardSection} from "./components/common";

import { Icon } from 'react-native-elements'

import { auth } from "./actions";

class RouterDrawerComponent extends Component {

  onPressLogout() {
    this.props.logout()
  }

  renderSidebar() {
    if (this.props.isAuthenticated) {
      return (
        <>
          <View style={styles.buttonContainer}>
            <Icon
              // reverse
              name='login-variant'
              type='material-community'
              // color='#517fa4'
            />
            <Button style={styles.buttonStyle} onPress={Actions.login}>
              Login
            </Button>
          </View>
        </>
        )
    }

    if (!this.props.isAuthenticated) {
      return (
        <>
          <View style={styles.buttonContainer}>
            <Icon
              name='chart-timeline'
              type='material-community'
            />
            <Button style={styles.buttonStyle} onPress={Actions.pomodoro}>Dashboard (coming)</Button>
          </View>
          <View style={styles.buttonContainer}>
            <Icon
              name='timer'
              type='material-community'
            />
            <Button style={styles.buttonStyle} onPress={Actions.pomodoro}>Pomodoro</Button>
          </View>
          <View
            // Using destructing of style
            style={
              [styles.containerStyle, {
                borderBottomColor: '#2C2727',
                borderBottomWidth: 1,
                marginBottom: 5,
                marginHorizontal: 10,
              }]
            }
          />
          <View style={styles.buttonContainer}>
            <Icon
              name='logout'
              type='simple-line-icon'
              // color='#517fa4'
            />
            <Button style={styles.buttonStyle} onPress={this.onPressLogout.bind(this)}>Logout</Button>
          </View>

        </>
      )
    }
  }

  render() {
    return(
      <View style={styles.containerStyle}>
        <Text>Dashboard Native</Text>
        {this.renderSidebar()}
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
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  buttonStyle: {
    // flexDirection: 'row',
    // marginLeft: 20,
    // marginRight: 20,
    flex: 1,
    alignSelf: 'stretch',
    justifyContent: 'center',
    // marginBottom: 2,
    // borderRadius: 15,

    // backgroundColor: '#524f57',
    // borderColor: '#524f57',

    backgroundColor: '#E37979',
    borderColor: '#ff8a8a',
    borderRadius: 1,

  },
};

const mapStateToProps = state => {
    return {
      isAuthenticated: state.auth.isAuthenticated,
      // user: state.auth,
      isLoading: state.auth.isLoading,
    }
}

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(auth.logout()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RouterDrawerComponent);
