import React from "react";
import { List, ListItem } from "@mui/material";
import { useSelector } from "react-redux";
import ToDoListItem from "../ToDoListItem";

export const ToDoListItems = () => {
  const toDosData = useSelector(({ toDos: { toDosData } }) => toDosData);
  const searchValue = useSelector(({ toDos: { searchValue } }) => searchValue);
  const filterValue = useSelector(({ toDos: { filterValue } }) => filterValue);

  const preparedToDos = toDosData
    .filter((todo) => {
      // eslint-disable-next-line default-case
      switch (filterValue) {
        case "done":
          return todo.done;
        case "todo":
          return !todo.done;
        case "all":
          return todo;
      }
    })
    .filter((todo) =>
      todo.label.toLowerCase().includes(searchValue.toLowerCase())
    );

  const elements = preparedToDos.map((toDo) => {
    return (
      <ListItem key={toDo.id} dense divider>
        <ToDoListItem toDo={toDo} />
      </ListItem>
    );
  });

  return <List>{elements}</List>;
};
