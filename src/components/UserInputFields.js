import React, { Component } from "react";
import { connect } from "react-redux";
import { ADD_INPUTFIELD_DETAILS } from "../store/action";
import UserInput from "./UserInput";
import classes from "./UserInputFields.module.css";

class UserInputFields extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputFields: [],
      value: "",
      add: true,
    };
  }
  updateInputField = (e) => {
    this.setState({
      value: e.target.value,
    });
  };
  addInputField = (e) => {
    e.preventDefault();
    const inputFields = [...this.state.inputFields];
    const value = this.state.value;
    this.props.addInputValue(value);
    console.log(value, "val");
    inputFields.push(value);
    this.setState({
      inputFields,
      add: false,
    });
  };

  removeInputField = (index, e) => {
    e.preventDefault();
    const inputFields = [...this.state.inputFields];
    inputFields.splice(index, 1);
    this.setState({
      inputFields,
      add: true,
    });
  };
  render() {
    return (
      <div className={classes.dashbord}>
        <header>Todo List</header>
        <div className={classes.buttonWrap}>
          <button onClick={this.addInputField}>Add</button>
        </div>
        <form>
          <UserInput
            type="text"
            value={this.state.value}
            updateInputField={this.updateInputField}
            removeInputField={this.removeInputField}
            addInputField={this.addInputField}
            addAction={this.state.add}
          />
          {this.state.inputFields.map((add, index) => (
            <UserInput
              key={index}
              index={index}
              type="text"
              value={this.state.value}
              updateInputField={this.updateInputField}
              removeInputField={this.removeInputField}
              addInputField={this.addInputField}
            />
          ))}
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  ...state,
});

const dispatchProps = (dispatch) => {
  return {
    addInputValue: (data) =>
      dispatch({ type: ADD_INPUTFIELD_DETAILS, value: data }),
  };
};

export default connect(mapStateToProps, dispatchProps)(UserInputFields);
