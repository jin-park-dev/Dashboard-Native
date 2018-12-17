import React, { Component } from 'react';
import {FlatList, Picker, View, Text} from 'react-native';
import { connect } from 'react-redux';
import {CardSection} from "../common";
import moment from "moment";
import { fetchPomodoroCount } from "../../actions/action_Pomodoro";

class PomodoroCounter extends Component {

  componentWillMount() {
    this.handlePomodoroCount()
  }

  handlePomodoroCount() {
    // Take it from UI, this is temp
    let start = moment().format('YYYY-MM-DD');
    let finish = moment().add(1,'d').format('YYYY-MM-DD');
    this.props.fetchPomodoroCount(start, finish);
  }

  renderPomodoroIcon() {
    const { pomoBoxStyle, pomoBoxWrapperStyle } = styles;
    let pomodoroIcons = [];
    let pomodoroCount = parseInt(this.props.pomodoro);

    for (let i=0; i < pomodoroCount; i++) {
      let currentIcon = <View key={i} style={pomoBoxWrapperStyle}><View style={pomoBoxStyle}></View></View>
      pomodoroIcons.push(currentIcon)
    }
    return pomodoroIcons
  }

  render() {

    const { containerStyle, cardStyle, pomoBoxStyle, pomoBoxWrapperStyle } = styles;

    return (
      <View style={containerStyle}>
        {/*<View style={cardStyle}>*/}
        {/*<View style={pomoBoxWrapperStyle}><View style={pomoBoxStyle}></View></View>*/}
        {/*<View style={pomoBoxWrapperStyle}><View style={pomoBoxStyle}></View></View>*/}
        {/*<View style={pomoBoxWrapperStyle}><View style={pomoBoxStyle}></View></View>*/}
        {/*<View style={pomoBoxWrapperStyle}><View style={pomoBoxStyle}></View></View>*/}
        {/*<View style={pomoBoxWrapperStyle}><View style={pomoBoxStyle}></View></View>*/}
        {/*/!*</View>*!/*/}
        {/*/!*<View style={cardStyle}>*!/*/}
        {/*<View style={pomoBoxWrapperStyle}><View style={pomoBoxStyle}></View></View>*/}
        {/*<View style={pomoBoxWrapperStyle}><View style={pomoBoxStyle}></View></View>*/}
        {/*<View style={pomoBoxWrapperStyle}><View style={pomoBoxStyle}></View></View>*/}
        {/*<View style={pomoBoxWrapperStyle}><View style={pomoBoxStyle}></View></View>*/}
        {/*<View style={pomoBoxWrapperStyle}><View style={pomoBoxStyle}></View></View>*/}
        {/*/!*</View>*!/*/}
        {/*/!*<View style={cardStyle}>*!/*/}
        {/*<View style={pomoBoxWrapperStyle}><View style={pomoBoxStyle}></View></View>*/}
        {/*<View style={pomoBoxWrapperStyle}><View style={pomoBoxStyle}></View></View>*/}
        {/*/!*<View style={pomoBoxStyle}></View>*!/*/}
        {/*/!*<View style={pomoBoxStyle}></View>*!/*/}
        {/*/!*<View style={pomoBoxStyle}></View>*!/*/}
        {/*</View>*/}

        <View style={cardStyle}>
          {this.renderPomodoroIcon()}
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

function mapDispatchToProps(dispatch) {
  return {
    fetchPomodoroCount: (start, finish) => dispatch(fetchPomodoroCount(start, finish)),
  };
}

function mapStateToProps(state) {
  return {
    pomodoro: state.stats.pomodoro,
    pomodoroLoading: state.stats.loading.pomodoro,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(PomodoroCounter);