import React, { Component } from 'react';
import { Picker, View, Text } from 'react-native';
import { pickerUpdate } from '../../actions/action_PomodoroPickerForm';
import { connect } from 'react-redux';

class PomodoroPicker extends Component {
  // renderItem(library) {
  //   return <ListItem library={library}/>
  // }

  // state = {
  //   tasks: [],
  //   selectedTask: "6",
  // };

  renderTaskList() {
    // console.log(this.props.kanbanBoard.kanbanBoardAll[0].tasks);
    let tasks = this.props.kanbanBoard.kanbanBoardAll[0].tasks;

    // tasks.entries.map(([key, value]) => {
    //   console.log(key)
    // })

    let pickerList = [];

    Object.entries(tasks).map(([key, value]) => {
      let pickerItem = <Picker.Item label={value.name} value={key} key={key} />;
      pickerList.push(pickerItem)
    });

    return pickerList;
  }

  render() {

    // console.log(this.props.kanbanBoard);
    // console.log("this.props.selectedTask");
    // console.log(this.props.selectedTask);

    const { cardStyle, pickerStyle } = styles;

    if (this.props.kanbanBoard.loading.tasks === true) {
      return (
        <View style={cardStyle}>
          <Picker
            style={pickerStyle}
          >
            <Picker.Item label="Loading..." value="Monday" />
          </Picker>
        </View>
      )}

    return (
      <View style={cardStyle}>
        <Picker
          style={pickerStyle}
          selectedValue={this.props.selectedTask}
          // onValueChange={value => this.setState({ selectedTask: value })}
          onValueChange={selectedValue => this.props.pickerUpdate(selectedValue)}
        >
          {this.renderTaskList()}
          {/*<Picker.Item label="Dashboard 2" value="Monday" />*/}
          {/*<Picker.Item label="Udemy React Native" value="Tuesday" />*/}
          {/*<Picker.Item label="Dashboard Native" value="Wednesday" />*/}
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

const mapStateToProps = state => {
  return {
    kanbanBoard: state.kanbanBoard,
    tasks: state.pomodoroPickerForm.tasks,
    selectedTask: state.pomodoroPickerForm.selectedTask,
  };
};

function mapDispatchToProps(dispatch) {
  return {
    pickerUpdate: (selectedValue) => dispatch(pickerUpdate(selectedValue)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PomodoroPicker);