import { React, useState } from "react";
import "./ItemAddForm.css";

import { useDispatch } from "react-redux";
import { addToDo } from "../../features/toDoList";

export const ItemAddForm = () => {
  const [label, setLabel] = useState("");
  const dispatch = useDispatch();

  const onLabelChange = ({ target }) => {
    setLabel(target.value);
  };

  return (
    <form
      className="item-add-form d-flex"
      onSubmit={(event) => {
        event.preventDefault();
        dispatch(addToDo(label));
        setLabel("");
      }}
    >
      <input
        className="form-control"
        type="text"
        onChange={onLabelChange}
        placeholder="What do you whant ot do?"
        value={label}
        required
      ></input>
      <button className="btn btn-primary">Add item</button>
    </form>
  );
};
