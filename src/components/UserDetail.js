import React, { useState } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

export default function UserDetail() {
  const [searchInput, setSearchInput] = useState(false);
  const [filteredList, setfilteredList] = useState([]);
  const inputFields = useSelector((state) => state.inputFields);
  console.log(inputFields, "data");

  const searchItem = (e) => {
    setSearchInput(true);
    const matchValueArray = inputFields.filter((item) =>
      item.match(e.target.value.toLowerCase())
    );
    setfilteredList(matchValueArray);
  };

  const filteredItemArray = (
    <div className="list-data">
      {filteredList.map((data, index) => {
        return (
          <p key={index} className="data">
            {data}
          </p>
        );
      })}
    </div>
  );

  const normalItemArray = (
    <div className="list-data">
      {inputFields.map((data, index) => {
        return (
          <p key={index} className="data">
            {data}
          </p>
        );
      })}
    </div>
  );

  return (
    <div className="dashbord">
      <NavLink to="/add">
        <button className="btn">Todo List</button>
      </NavLink>
      <div>
        <input
          type="text"
          onChange={(e) => {
            searchItem(e);
          }}
        />
        <button>Search</button>
      </div>
      {!searchInput && normalItemArray}
      {searchInput && filteredItemArray}
    </div>
  );
}
