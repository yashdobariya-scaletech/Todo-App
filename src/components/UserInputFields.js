import React, { Component } from "react";
import UserInput from "./UserInput";
import classes from "./UserInputFields.module.css";

export default class UserInputFields extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputFields: [],
      value: "",
      add: true,
    };
  }
  updateInputField = (e) => {
    console.log(e.target.value);
    this.setState({
      value: e.target.value,
    });
  };
  addInputField = (e) => {
    e.preventDefault();
    const inputFields = [...this.state.inputFields];
    const value = this.state.value;
    inputFields.push(value);
    this.setState({
      inputFields,
      add: false,
    });
  };

  removeInputField = (index, e) => {
    e.preventDefault();
    console.log(index);
    const inputFields = [...this.state.inputFields];
    inputFields.splice(index, 1);
    this.setState({
      inputFields,
    });
  };
  render() {
    return (
      <div className={classes.dashbord}>
        <header>Todo List</header>
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
              addAction={this.state.add}
            />
          ))}
        </form>
      </div>
    );
  }
}
