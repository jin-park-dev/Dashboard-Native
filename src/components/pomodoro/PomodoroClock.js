import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const PomodoroClock = ({ onPress, children }) => {
  const { buttonStyle, textStyle } = styles;

  return (
    <TouchableOpacity onPress={onPress} style={buttonStyle}>
      <Text style={textStyle}>
        {children}
        25 : 00
      </Text>
    </TouchableOpacity>
  )
};

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

export  { PomodoroClock };