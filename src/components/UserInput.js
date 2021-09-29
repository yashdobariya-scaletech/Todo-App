import React from "react";
import classes from "./UserInput.module.css";

export default function UserInput(props) {
  const addButton = <button onClick={props.addInputField}>Add</button>;
  const removeButton = (
    <button onClick={(e) => props.removeInputField(props.index, e)}>
      Remove
    </button>
  );

  const addAction = props.addAction;

  console.log(props);
  return (
    <div className={classes.inputField}>
      <input
        type={props.type}
        value={props.value}
        onChange={(e) => props.updateInputField(e)}
      />
      {addAction && addButton}
      {!addAction && removeButton}
    </div>
  );
}
