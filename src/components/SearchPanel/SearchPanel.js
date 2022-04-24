import React from "react";
import { TextField, Box, ButtonGroup, Button } from "@mui/material";

import { useDispatch, useSelector } from "react-redux";
import { filterToDos, searchToDos } from "../../features/toDoList";

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
  const buttonsElements = buttons.map(({ id, name, label }) => {
    return (
      <Button
        key={id}
        color="primary"
        variant={filterValue === name ? "contained" : "outlined"}
        onClick={() => dispatch(filterToDos(name))}
      >
        {label}
      </Button>
    );
  });

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <TextField
        placeholder={searchText}
        label="Search todos"
        fullWidth
        onChange={({ target }) => {
          dispatch(searchToDos(target.value));
        }}
        value={searchValue}
      ></TextField>
      <ButtonGroup>{buttonsElements}</ButtonGroup>
    </Box>
  );
};
