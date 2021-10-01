import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { ADD_FILTEREDARRAY } from "../store/action";

export default function UserDetail() {
  const dispatch = useDispatch();

  const inputFields = useSelector((state) => state);
  const inputFieldsData = inputFields.inputFields;
  console.log(inputFieldsData, "inputFieldsData");

  const searchItem = (e) => {
    const matchValueArray = inputFieldsData.filter((item) =>
      item.match(e.target.value.toLowerCase())
    );
    if (e.target.value !== 0) {
      console.log("log");
      dispatch({ type: ADD_FILTEREDARRAY, carsList: matchValueArray });
    }

    console.log(matchValueArray, "matchValue");
  };

  return (
    <div className="dashbord">
      <NavLink to="/add">
        <button className="btn">Todo List</button>
      </NavLink>
      <div>
        <input type="text" onChange={(e) => searchItem(e)} />
        <button>Search</button>
      </div>
      <div className="list-data">
        {inputFieldsData.map((data, index) => {
          return (
            <p key={index} className="data">
              {data}
            </p>
          );
        })}
      </div>
    </div>
  );
}
