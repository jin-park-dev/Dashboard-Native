// Import Libraries for making a component
import React from 'react';
import { Text, View } from 'react-native';


// Make a component
const Header = (props) => {
  const { textStyle, viewStyle } = styles;

  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{props.headerText}</Text>
    </View>
  );
};

const styles = {
  viewStyle: {
    backgroundColor: '#7f80f8',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    paddingTop: 15,

    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,

    // Android workaround. Shadow isn't supported in Android.
    elevation: 5,
    position: 'relative',
  },
  textStyle: {
    fontSize: 30
  },
}

// Make the component available to other parts of the app
export { Header };