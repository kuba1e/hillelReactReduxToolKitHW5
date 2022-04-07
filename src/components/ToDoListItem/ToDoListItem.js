import React from "react";
import { useDispatch } from "react-redux";
import {
  toggleDone,
  toggleImportant,
  deleteToDo,
} from "../../features/toDoList";
import "./ToDoListItem.css";

export const ToDoListItem = ({ toDo: { id, label, done, important } }) => {
  const dispatch = useDispatch();
  let className = "todo-list-item";
  let classNamesDone = done ? className + " done" : className;
  let classNamesImp = important
    ? classNamesDone + " important"
    : classNamesDone;

  return (
    <div className="item-content">
      <input
        className="form-check-input"
        type="checkbox"
        id="flexCheckChecked"
        defaultChecked={done}
        onClick={() => dispatch(toggleDone(id))}
      />
      <span className={classNamesImp}>{label}</span>
      <div className="btn-container">
        <button
          type="button"
          className="btn btn-danger"
          onClick={() => dispatch(deleteToDo(id))}
        >
          <i className="fa-solid fa-trash-can"></i>
        </button>
        <button
          type="button"
          className="btn btn-success"
          onClick={() => dispatch(toggleImportant(id))}
        >
          <i className="fa-solid fa-triangle-exclamation"></i>
        </button>
      </div>
    </div>
  );
};
