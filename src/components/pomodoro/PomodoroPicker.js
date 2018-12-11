import React, { Component } from 'react';
import { Picker, View} from 'react-native';
import { connect } from 'react-redux';

class PomodoroPicker extends Component {
  // renderItem(library) {
  //   return <ListItem library={library}/>
  // }

  render() {

    const { cardStyle, pickerStyle } = styles;

    return (
      <View style={cardStyle}>
        <Picker
          style={pickerStyle}
          // selectedValue={this.props.shift}
          // onValueChange={value => this.props.employeeUpdate({ prop: 'shift', value })}
        >
          <Picker.Item label="Dashboard 2" value="Monday" />
          <Picker.Item label="Udemy React Native" value="Tuesday" />
          <Picker.Item label="Dashboard Native" value="Wednesday" />
        </Picker>
      </View>
    )
  }
}

const styles = {
  cardStyle: {
    flexDirection: 'row',
    marginLeft: 20,
    marginRight: 20,
    borderRadius: 15,
    backgroundColor: '#E37979',
    borderColor: '#E37979',
  },
  pickerStyle: {
    flex: 1,
  }
};

// const mapStateToProps = state => {
//   return { libraries: state.libraries };
// };

export default connect(null)(PomodoroPicker);