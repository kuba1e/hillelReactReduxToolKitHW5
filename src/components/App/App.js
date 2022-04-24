import React from "react";
import { Box } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import ToDoList from "../ToDoListItems";
import SearchPanel from "../SearchPanel";
import AppHeader from "../AppHeader";
import ItemAddForm from "../ItemAddForm";

const theme = createTheme({
  components: {
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          position: "absolute",
          bottom: "-50%",
        },
      },
    },
  },
  palette: {
    primary: {
      main: "#3f51b5",
    },
    secondary: {
      main: "#c100f5",
    },
    error: {
      main: "#f11b0b",
    },
    warning: {
      main: "#ff6d00",
      contrastText: "rgba(255,255,255,0.87)",
    },
    info: {
      main: "#87c4ec",
      contrastText: "rgba(255,255,255,0.87)",
    },
    success: {
      main: "#1be424",
    },
  },
  typography: {
    fontFamily: "Secular+One",
    fontSize: 18,
  },
});

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ px: 30, py: 10 }}>
        <AppHeader />
        <SearchPanel />
        <ToDoList />
        <ItemAddForm />
      </Box>
    </ThemeProvider>
  );
};
