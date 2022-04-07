import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { filterToDos, searchToDos } from "../../features/toDoList";
import "./SearchPanel.css";

const buttons = [
  { id: 1, name: "all", label: "All" },
  { id: 2, name: "todo", label: "Active" },
  { id: 3, name: "done", label: "Done" },
];

export const SearchPanel = () => {
  const dispatch = useDispatch();
  const filterValue = useSelector(({ toDos: { filterValue } }) => filterValue);
  const searchValue = useSelector(({ toDos: { searchValue } }) => searchValue);

  const searchText = "Type here to search";
  const classNames = "btn btn-outline-primary";
  const buttonsElements = buttons.map(({ id, name, label }) => {
    return (
      <button
        key={id}
        className={filterValue === name ? classNames + " active" : classNames}
        onClick={() => dispatch(filterToDos(name))}
      >
        {label}
      </button>
    );
  });

  return (
    <div className="search-panel">
      <input
        className="text-inputs"
        type="text"
        placeholder={searchText}
        onChange={({ target }) => {
          dispatch(searchToDos(target.value));
        }}
        value={searchValue}
      ></input>
      <div className="btn-group">{buttonsElements}</div>
    </div>
  );
};
