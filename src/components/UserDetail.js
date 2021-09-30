import React, { useState } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

export default function UserDetail() {
  const [searchInput, setSearchInput] = useState();
  const inputFields = useSelector((state) => state);
  const inputFieldsData = inputFields.inputFields;

  const searchItem = (e) => {
    console.log(e, "call");
    const matchValue = inputFieldsData.filter(
      (item) => item === e.target.value
    );
    console.log(matchValue, "matchValue");
    setSearchInput();
  };

  return (
    <div className="dashbord">
      <NavLink to="/add">
        <button className="btn">Todo List </button>
      </NavLink>
      <div>
        <input
          type="text"
          value={searchInput}
          onChange={(e) => searchItem(e)}
        />
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
