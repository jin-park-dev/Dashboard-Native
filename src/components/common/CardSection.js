import React from 'react'
import { View } from 'react-native'

const CardSection = (props) => {
  return (
    // style most to the right gets used! Nice react native trick :)
    <View style={[styles.containerStyle, props.style]}>
      {props.children}
    </View>
  );
}

const styles = {
  containerStyle: {
    borderBottomWidth: 1,
    padding: 5,
    backgroundColor: '#716F77',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor: '#ddd5e9',
    position: 'relative',
  }
};


export { CardSection };