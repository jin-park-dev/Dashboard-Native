import React from 'react';
import { Text, TouchableOpacity } from 'react-native';


const Button = ({ onPress, children, style }) => {
  const { buttonStyle, textStyle } = styles;

  return (
    <TouchableOpacity onPress={onPress} style={[buttonStyle, style]}>
      <Text style={textStyle}>
        {children}
      </Text>
    </TouchableOpacity>
  )
};

const styles = {
  textStyle: {
    alignSelf: 'center',
    color: '#2C2727',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10,
  },
  buttonStyle: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#E37979',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ff8a8a',
    marginLeft: 5,
    marginRight: 5
  }
};

export  { Button };