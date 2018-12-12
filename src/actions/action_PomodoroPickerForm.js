import * as types from "./actionTypes"

export const pickerUpdate = (selectedValue) => {
  // console.log("selectedValue");
  // console.log(typeof selectedValue);
  // console.log(selectedValue);
  return {
    type: types.UPDATE_POMODOROPICKERFORM_PICKERITEM,
    payload: selectedValue
  };
};
