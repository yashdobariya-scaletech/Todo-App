import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

export default function UserDetail() {
  const inputFields = useSelector((state) => state);
  console.log(inputFields.inputFields, "inputFields");

  return (
    <div className="dashbord">
      <NavLink to="/add">
        <button>Todo List </button>
      </NavLink>
      <div className="list-data">
        {inputFields.inputFields.map((data) => {
          return <p className="data">{data}</p>;
        })}
      </div>
    </div>
  );
}
