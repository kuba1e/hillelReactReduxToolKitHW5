import { configureStore } from "@reduxjs/toolkit";
import toDosReducer from "../features/toDoList";

export const store = configureStore({
  reducer: {
    toDos: toDosReducer,
  },
});
