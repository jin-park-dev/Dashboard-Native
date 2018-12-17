import React, { Component } from 'react';
import {FlatList, Picker, View, Text} from 'react-native';
import { connect } from 'react-redux';
import {CardSection} from "../common";

class PomodoroCounter extends Component {
  // renderItem(library) {
  //   return <ListItem library={library}/>
  // }

  render() {

    const { containerStyle, cardStyle, pomoBoxStyle, pomoBoxWrapperStyle } = styles;

    return (
      <View style={containerStyle}>
        <View style={cardStyle}>
          <View style={pomoBoxWrapperStyle}><View style={pomoBoxStyle}></View></View>
          <View style={pomoBoxWrapperStyle}><View style={pomoBoxStyle}></View></View>
          <View style={pomoBoxWrapperStyle}><View style={pomoBoxStyle}></View></View>
          <View style={pomoBoxWrapperStyle}><View style={pomoBoxStyle}></View></View>
          <View style={pomoBoxWrapperStyle}><View style={pomoBoxStyle}></View></View>
        {/*</View>*/}
        {/*<View style={cardStyle}>*/}
          <View style={pomoBoxWrapperStyle}><View style={pomoBoxStyle}></View></View>
          <View style={pomoBoxWrapperStyle}><View style={pomoBoxStyle}></View></View>
          <View style={pomoBoxWrapperStyle}><View style={pomoBoxStyle}></View></View>
          <View style={pomoBoxWrapperStyle}><View style={pomoBoxStyle}></View></View>
          <View style={pomoBoxWrapperStyle}><View style={pomoBoxStyle}></View></View>
        {/*</View>*/}
        {/*<View style={cardStyle}>*/}
          <View style={pomoBoxWrapperStyle}><View style={pomoBoxStyle}></View></View>
          <View style={pomoBoxWrapperStyle}><View style={pomoBoxStyle}></View></View>
          {/*<View style={pomoBoxStyle}></View>*/}
          {/*<View style={pomoBoxStyle}></View>*/}
          {/*<View style={pomoBoxStyle}></View>*/}
        </View>

      </View>
    )
  }
}

const styles = {
  containerStyle: {
    flex: 0,
    flexDirection: 'row',
    // width: '100%',
    // // alignItems: 'flex-start',
    // justifyContent: 'center',
    // backgroundColor: "blue",
    // alignItems:'center',
  },
  cardStyle: {
    flex: 1,
    // height: 15,
    flexDirection: 'row',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
    // justifyContent: 'space-between',
    // borderRadius: 15,

    // Little janky to do it this way but gets result done under mobile. Will be issue under tablet.
    marginLeft: 25,
    // marginRight: 25,

    // marginBottom: 25,

    // padding: 15,
  },
  pomoBoxWrapperStyle: {
    // width: 25,
    // height: 25,
    width: '20%',
    // height: 25,
    // borderRadius: 50/2/4,

    // marginBottom: 25,
    padding: 15,

  },
  pomoBoxStyle: {
    backgroundColor: '#E37979',
    borderColor: '#E37979',
    width: 25,
    height: 25,
    borderRadius: 25/2,
  }
};

// const mapStateToProps = state => {
//   return { libraries: state.libraries };
// };

export default connect(null)(PomodoroCounter);