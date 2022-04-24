import React from "react";
import { Checkbox, Box, ListItemText, IconButton } from "@mui/material";
import PriorityHighIcon from "@mui/icons-material/PriorityHigh";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { useDispatch } from "react-redux";
import {
  toggleDone,
  toggleImportant,
  deleteToDo,
} from "../../features/toDoList";

export const ToDoListItem = ({ toDo: { id, label, done, important } }) => {
  const dispatch = useDispatch();
  return (
    <Box
      sx={{
        width: 1,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Checkbox checked={done} onClick={() => dispatch(toggleDone(id))} />
      <ListItemText
        sx={{
          textDecoration: done ? "line-through" : "",
          color: important ? "warning.main" : "",
          px: 2,
        }}
        primary={label}
      ></ListItemText>
      <Box
        sx={{
          width: 1 / 6,
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        <IconButton
          size="large"
          color="error"
          onClick={() => dispatch(deleteToDo(id))}
        >
          <DeleteOutlineIcon />
        </IconButton>
        <IconButton
          size="large"
          color="warning"
          onClick={() => dispatch(toggleImportant(id))}
        >
          <PriorityHighIcon />
        </IconButton>
      </Box>
    </Box>
  );
};
