import React, { Component } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";

import { ADD_INPUTFIELD_DETAILS } from "../store/action";
import UserInput from "./UserInput";

class UserInputFields extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputFields: [],
      value: "",
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
    inputFields.push(value);
    this.setState({
      inputFields,
      value: "",
    });
  };

  removeInputField = (index, e) => {
    e.preventDefault();
    const inputFields = [...this.state.inputFields];
    inputFields.splice(index, 1);
    this.setState({
      inputFields,
    });
  };
  render() {
    return (
      <div className="dashbord">
        {console.log(this.props.inputFields)}
        <header>Todo List</header>
        <form>
          <NavLink to="/detail">
            <button className="btn">See List </button>
          </NavLink>
          <div className="inputData">
            <input
              type="text"
              value={this.state.value}
              onChange={(e) => this.updateInputField(e)}
            />
            <button type="submit" onClick={(e) => this.addInputField(e)}>
              Add
            </button>
            {this.state.inputFields.map((add, index) => (
              <UserInput
                key={index}
                index={index}
                type="text"
                value={add}
                updateInputField={this.updateInputField}
                removeInputField={this.removeInputField}
                addInputField={this.addInputField}
                disabled={true}
              />
            ))}
          </div>
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
