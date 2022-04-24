import { React } from "react";
import { Box, Typography } from "@mui/material";
import { useSelector } from "react-redux";

export const AppHeader = () => {
  const toDosData = useSelector(({ toDos: { toDosData } }) => toDosData);
  const toDo = toDosData.filter((todo) => !todo.done).length;
  const done = toDosData.length - toDo;
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        py: 2,
      }}
    >
      <Typography variant="h1"> My to do list</Typography>
      <Box>
        <Typography variant="h5">{toDo} more to do,</Typography>
        <Typography variant="h5">{done} done</Typography>
      </Box>
    </Box>
  );
};
