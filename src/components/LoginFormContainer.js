import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';
import { Card, CardSection, Input, Button, Spinner } from './common';

import { auth } from "../actions";

class LoginFormContainer extends Component {

  state = {
    username: "",
    password: "",
  }

  onPasswordChange(value) {
    this.setState({password: value})
  }

  onButtonPress() {
    const { username, password } = this.state;
    this.props.login(username, password);
  }

  renderButton() {
    if (this.props.loading) {
      return <Spinner size="large" />;
    }

    return (
      <Button onPress={this.onButtonPress.bind(this)}>
        Login
      </Button>
    );
  }

  render() {
    return (
      <View style={styles.containerStyle}>
        <CardSection>
          <Input
            label="Email"
            placeholder="email@gmail.com"
            onChangeText={value => this.setState({username: value})}
          />
        </CardSection>

        <CardSection>
          <Input
            secureTextEntry
            label="Password"
            placeholder="password"
            onChangeText={this.onPasswordChange.bind(this)}
          />
        </CardSection>

        {this.props.errors.length > 0 && (
          <Text style={styles.errorTextStyle}>
            {this.props.errors.map(error => (
              <Text key={error.field}>{error.message}</Text>
            ))}
          </Text>
        )}

        <CardSection>
          {this.renderButton()}
        </CardSection>
      </View>
    );
  }
}

const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  },
  containerStyle: {
    flex: 3,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#716F77',
  },
  cardStyle: {

  }
};

const mapStateToProps = state => {
  let errors = [];
  if (state.auth.errors) {
    errors = Object.keys(state.auth.errors).map(field => {
      return {field, message: state.auth.errors[field]};
    });
  }
  return {
    errors,
    isAuthenticated: state.auth.isAuthenticated
  };
}

const mapDispatchToProps = dispatch => {
  return {
    login: (username, password) => {
      return dispatch(auth.login(username, password));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginFormContainer);