import React, { useState } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

export default function UserDetail() {
  // const [searchInput, setSearchInput] = useState();
  const inputFields = useSelector((state) => state);
  const inputFieldsData = inputFields.inputFields;

  // const regex = /[A-Z,a-z]/g;

  const searchItem = (e) => {
    console.log(e, "call");
    const matchValueArray = inputFieldsData.filter((item) =>
      item.match(e.target.value.toLowerCase())
    );
    const matchItem = matchValueArray;
    console.log(matchItem, "matchItem");
    console.log(matchValueArray, "matchValue");
  };

  return (
    <div className="dashbord">
      <NavLink to="/add">
        <button className="btn">Todo List </button>
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
