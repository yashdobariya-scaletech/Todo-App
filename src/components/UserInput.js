import React from "react";

export default function UserInput(props) {
  return (
    <div className="inputField">
      <input type={props.type} value={props.value} disabled={props.disabled} />
      <button onClick={(e) => props.removeInputField(props.index, e)}>
        Remove
      </button>
    </div>
  );
}
